<script lang="ts">
	export let title: string;
	/** タイトルの後ろにアクセント色で表示する文字列（例: ".dev"） */
	export let accent: string | undefined = undefined;
</script>

<h1 class="page-title slide-enter pointer-events-none select-none" style="--enter-stage: 0;">
	{title}{#if accent}<span class="accent">{accent}</span>{/if}
</h1>

<style>
	/* .content h1 の記事見出しスタイルを打ち消し、ページ共通のタイトル書式にそろえる */
	.page-title {
		margin: 0 0 2rem;
		/* ブランドの Ink（ロゴの背景と同じ色） */
		color: var(--c-ink);
		font-size: 1.875rem;
		font-weight: 400;
		line-height: 2.25rem;
	}

	.accent {
		color: var(--c-accent);
	}
</style>
