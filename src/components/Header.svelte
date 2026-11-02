<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
</script>

<header class="z-40">
	<div class="absolute m-5 select-none outline-none xl:fixed">
		<a href={resolve('/')} aria-label="shunagi.dev トップへ">
			<Logo />
		</a>
	</div>
	<nav class="nav">
		<div class="spacer"></div>
		<div class="right">
			<a href={resolve('/blogs')}> Blog </a>
		</div>
	</nav>
</header>

<style>
	.nav {
		padding: 2rem;
		width: 100%;
		display: grid;
		grid-template-columns: auto max-content;
		box-sizing: border-box;
	}
	.nav > * {
		margin: auto;
	}
	.nav a {
		text-decoration: none;
		color: inherit;
		transition: opacity 0.2s ease;
		opacity: 0.6;
		user-select: none;
		outline: none;
	}
	.nav a:hover {
		opacity: 1;
		text-decoration-color: inherit;
	}
	.nav .right {
		display: grid;
		grid-gap: 1.2rem;
		grid-auto-flow: column;
	}
	.nav .right > * {
		margin: auto;
	}
</style>
