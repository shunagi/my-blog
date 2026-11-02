import { error } from '@sveltejs/kit';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import type { Blog, BlogList } from '$lib/content/blog';
import { microcmsClient } from '$lib/server/cms/microcms-client';

const BLOGS_ENDPOINT = 'blogs';

export async function listBy(tagId?: string, queries?: MicroCMSQueries): Promise<BlogList> {
	const filters = [tagId ? `meta.tags[contains]${tagId}` : undefined, queries?.filters]
		.filter(Boolean)
		.join('&&');

	try {
		return await microcmsClient.get<BlogList>({
			endpoint: BLOGS_ENDPOINT,
			queries: {
				...queries,
				...(filters ? { filters } : {})
			}
		});
	} catch {
		error(500, 'ブログの一覧を取得できませんでした。');
	}
}

const MAX_LIMIT = 100;

export async function listAll(
	queries?: Omit<MicroCMSQueries, 'limit' | 'offset'>
): Promise<Blog[]> {
	const contents: Blog[] = [];
	let totalCount = Infinity;

	while (contents.length < totalCount) {
		const page = await listBy(undefined, { ...queries, limit: MAX_LIMIT, offset: contents.length });
		contents.push(...page.contents);
		totalCount = page.totalCount;
		if (page.contents.length === 0) break;
	}

	return contents;
}

export async function findBy(contentId: string, queries?: MicroCMSQueries): Promise<Blog> {
	try {
		return await microcmsClient.getListDetail<Blog>({
			endpoint: BLOGS_ENDPOINT,
			contentId,
			queries
		});
	} catch (e) {
		if (isNotFound(e)) {
			error(404, 'ブログが見つかりませんでした。');
		}
		error(500, 'ブログを取得できませんでした。');
	}
}

// microCMS SDK はステータスコードをエラーメッセージ（"response status: 404"）にのみ含める
function isNotFound(e: unknown): boolean {
	return e instanceof Error && /response status: 404\b/.test(e.message);
}
