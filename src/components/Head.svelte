<script lang="ts">
	import { page } from '$app/state';
	import { App } from '$config/app';
	import type { Seo } from '$lib/seo';

	export let pageTitle: Seo['pageTitle'];
	export let description: Seo['description'];
	export let ogImage: Seo['ogImage'];
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={new URL(page.url.pathname, App.url).toString()} />
	<meta property="og:locale" content="ja_JP" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:url" content={new URL(page.url.pathname, App.url).toString()} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@sh_unagi" />
</svelte:head>
