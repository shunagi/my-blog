import type { RequestHandler } from './$types';
import { App } from '$config/app';
import { buildSitemapXml, type SitemapEntry } from '$lib/sitemap';
import { listAll } from '$lib/server/content/blog-repository';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const blogs = await listAll({ fields: 'id,revisedAt,meta.tags' });

	const tagIds = new Set(blogs.flatMap((blog) => blog.meta?.tags?.map((tag) => tag.id) ?? []));

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
