<script lang="ts">
	import type { PageData } from './$types';
	import BlogList from '../../components/BlogList.svelte';
	import PageTitle from '../../components/PageTitle.svelte';
	export let data: PageData;
</script>

<PageTitle title="Blog" />
<BlogList blogs={data.contents} />
