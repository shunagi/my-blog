<script lang="ts">
	import { resolve } from '$app/paths';

	export let tagId: string;
</script>

<a href={resolve('/tags/[slug]', { slug: tagId })} class="tag-link" target="_blank">
	<slot />
</a>

<style>
	.tag-link {
		display: inline-flex;
		align-items: center;
		background: #8882;
		line-height: 100%;
		color: var(--fg-light) !important;
		padding: 0.2rem;
		border-radius: 0.25rem;
	}
	.tag-link:hover {
		background: #8883;
		color: var(--fg) !important;
	}
</style>
