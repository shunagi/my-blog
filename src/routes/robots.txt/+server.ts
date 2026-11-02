import type { RequestHandler } from './$types';
import { App } from '$config/app';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${new URL('/sitemap.xml', App.url)}`,
		''
	];

	return new Response(body.join('\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' }
	});
};
