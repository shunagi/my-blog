<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Blog } from '$lib/content/blog';
	import dayjs from 'dayjs';
	import 'dayjs/locale/ja';
	import relativeTime from 'dayjs/plugin/relativeTime';

	export let content: Blog;

	dayjs.locale('ja');
	dayjs.extend(relativeTime);
</script>

<div>
	<a class="item block" href={resolve('/blogs/[slug]', { slug: content.id })}>
		<li class="flex flex-col gap-2">
			<span class="text-lg">
				{content.title}
			</span>
			<span class="text-sm opacity-50">
				{dayjs(content.publishedAt).fromNow()}
			</span>
		</li>
	</a>
</div>
