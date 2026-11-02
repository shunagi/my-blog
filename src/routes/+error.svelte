<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import PageTitle from '../components/PageTitle.svelte';
</script>

<PageTitle title={String(page.status)} />
{#if page.status === 404}
	<p class="slide-enter" style="--enter-stage: 1;">This page seems to have swum away.</p>
	<p class="slide-enter" style="--enter-stage: 2;">
		Let's head back to the <a href={resolve('/blogs')}>blog list</a> with Shunagi-kun.
	</p>
{:else}
	<p class="slide-enter" style="--enter-stage: 1;">Sorry, something went wrong.</p>
{/if}
