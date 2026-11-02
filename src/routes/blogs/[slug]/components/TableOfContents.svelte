<script lang="ts">
	import { onMount } from 'svelte';
	import tocbot from 'tocbot';

	onMount(() => {
		const tocElement = document.querySelector('.toc');
		const contentElement = document.querySelector('.znc');

		if (!tocElement || !contentElement) {
			return;
		}

		tocbot.init({
			tocSelector: '.toc',
			contentSelector: '.znc',
			headingSelector: 'h1, h2, h3'
		});

		return () => {
			tocbot.destroy();
		};
	});
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.27.4/tocbot.css" />
</svelte:head>

<div class="sticky top-[100px] rounded-lg border border-gray-200 bg-white p-5">
	<details>
		<summary class="p-2">目次</summary>
		<nav class="toc"></nav>
	</details>
</div>

<style>
	/* tocbot 既定の緑 (#54bc4b) を、ブログのアクセント色に置き換える */
	.toc :global(.is-active-link::before) {
		background-color: var(--c-accent);
	}
</style>
