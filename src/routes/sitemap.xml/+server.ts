import type { RequestHandler } from './$types';
import { App } from '$config/app';
import { buildSitemapXml, type SitemapEntry } from '$lib/sitemap';
import { listAll } from '$lib/server/content/blog-repository';

export const prerender = true;

export const GET: RequestHandler = async () => {
	// fields に meta.tags を指定すると参照先が空オブジェクトで返るため meta ごと取得する
	const blogs = await listAll({ fields: 'id,revisedAt,meta' });

	const tagIds = new Set(
		blogs.flatMap((blog) => blog.meta?.tags?.map((tag) => tag.id) ?? []).filter(Boolean)
	);

	const latest = blogs
		.map((blog) => blog.revisedAt)
		.sort()
		.at(-1);

	const entries: SitemapEntry[] = [
		{ path: '/', lastmod: latest },
		{ path: '/blogs', lastmod: latest },
		...blogs.map((blog) => ({ path: `/blogs/${blog.id}`, lastmod: blog.revisedAt })),
		...[...tagIds].map((id) => ({ path: `/tags/${encodeURIComponent(id)}` }))
	];

	return new Response(buildSitemapXml(App.url, entries), {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};
