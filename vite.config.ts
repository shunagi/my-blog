import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		// sanitize-html (CJS) は ESM 専用の htmlparser2@12 を require() する。
		// Vercel の実行環境は require(esm) に対応していないため、バンドルに含めて解決させる。
		noExternal: ['sanitize-html']
	}
});
