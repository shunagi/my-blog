export type SitemapEntry = {
	path: string;
	lastmod?: string;
};

export function buildSitemapXml(baseUrl: string, entries: SitemapEntry[]): string {
	const urls = entries
		.map(({ path, lastmod }) => {
			const loc = `<loc>${escapeXml(new URL(path, baseUrl).toString())}</loc>`;
			const mod = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : '';
			return `<url>${loc}${mod}</url>`;
		})
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
