<script lang="ts">
	import type { Blog } from '$lib/content/blog';
	import BlogCard from './BlogCard.svelte';

	export let blogs: Blog[];
</script>

<ul>
	<div
		class="slide-enter pointer-events-none relative h-20 select-none"
		style="--enter-stage: 0;"
	></div>
	{#each blogs as blog, idx (blog.id)}
		<div class="slide-enter" style={`--enter-stage: ${idx + 1};`}>
			<BlogCard content={blog} />
		</div>
	{/each}
</ul>
