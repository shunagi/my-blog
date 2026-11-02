import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// sanitize-html (CJS) は ESM 専用の htmlparser2@12 を require() するが、
// Vercel の実行環境は require(esm) に対応していない。
// sanitize-html だけをバンドルすると依存が関数に同梱されないため、依存ごとバンドルに含める。
const SANITIZE_HTML_DEPS = [
	'sanitize-html',
	'escape-string-regexp',
	'htmlparser2',
	'domelementtype',
	'domhandler',
	'domutils',
	'dom-serializer',
	'entities',
	'is-plain-object',
	'launder',
	'parse-srcset',
	'postcss',
	'nanoid',
	'picocolors',
	'source-map-js'
];

// dev サーバーで noExternal にすると CJS がそのまま評価され require is not defined になるため、ビルド時のみ適用する
export default defineConfig(({ command }) => ({
	plugins: [sveltekit()],
	ssr: {
		noExternal: command === 'build' ? SANITIZE_HTML_DEPS : []
	}
}));
