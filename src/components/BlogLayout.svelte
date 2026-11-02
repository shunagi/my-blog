<script lang="ts">
	import dayjs from 'dayjs';
	import Tag from './Tag.svelte';
	import type { Blog } from '$lib/content/blog';

	export let blog: Blog;
</script>

<article>
	<header>
		<h1 class="slide-enter" style="--enter-stage: 0;">
			{blog.title}
		</h1>
		<p class="slide-enter mt-5 opacity-50" style="--enter-stage: 1;">
			{dayjs(blog.publishedAt).format('YYYY/MM/DD')}
		</p>
	</header>
	<div class="slide-enter flex" style="--enter-stage: 2;">
		{#if blog.meta?.tags?.length}
			<div class="mb-2 flex flex-wrap">
				{#each blog.meta.tags as tag (tag.id)}
					<div class="mb-2 mr-2">
						<Tag tagId={tag.id}>{tag.name}</Tag>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<div>
		<slot />
	</div>
</article>
