<script lang="ts">
	import PageTitle from '../components/PageTitle.svelte';
</script>

<PageTitle title="shunagi" accent=".dev" />
<p class="slide-enter" style="--enter-stage: 1;">
	Hi! I'm Shun, a software engineer and engineering manager.
</p>
<div class="slide-enter" style="--enter-stage: 2;">
	<p>Lately, I've been interested in:</p>
	<ul class="interests">
		<li>
			Building systems that capture how the business really works, not just what's technically best
		</li>
		<li>Management that thinks about how the organization grows</li>
	</ul>
</div>
<p class="slide-enter" style="--enter-stage: 3;">
	I write freely about what I learn, hoping to bring value to more people.
</p>
<p class="slide-enter" style="--enter-stage: 4;">
	Outside of engineering, I love <span class="unagi">unagi</span> (eel) — that's Shunagi-kun in the
	logo. I also enjoy walking by calm water — <span class="nagi">nagi</span> in Japanese.
</p>

<style>
	/* .content ul は list-style: none のため、ここだけ箇条書きの記号を出す */
	.interests {
		padding-left: 1.25em;
		list-style-type: disc;
	}

	.interests li::marker {
		color: var(--c-accent);
	}

	.unagi {
		color: var(--logo-amber);
		font-weight: 500;
	}

	.nagi {
		color: var(--c-accent);
		font-weight: 500;
	}
</style>
