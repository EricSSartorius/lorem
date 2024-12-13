<script lang="ts">
	let { size = 'md', class: className = '' }: { class?: string; size?: 'md' | 'sm' | 'xs' } =
		$props();

	// TODO: Cleanup
</script>

{#if size === 'xs'}
	<hr class="mx-auto my-0 h-px w-1/3 border-none bg-white/10 {className}" />
{:else}
	<div class="divider-{size} {className}"></div>
{/if}

<style>
	.divider-md {
		--colorOne: rgba(54, 118, 227, 0.08);
		--colorTwo: rgba(30, 210, 230, 0.02);

		height: 40px;
		position: relative;
		width: 100%;
		background: radial-gradient(ellipse farthest-side at top center, var(--colorOne), transparent);
	}
	.divider-md:before {
		content: '';
		display: block;
		position: absolute;
		top: 0px;
		right: 0;
		left: 0;
		height: 50px;
		background: linear-gradient(
			to right,
			transparent,
			var(--colorTwo),
			var(--colorTwo),
			transparent
		);
	}

	.divider-sm {
		--colorOne: rgba(54, 118, 227, 0.08);
		--colorTwo: rgba(30, 210, 230, 0.02);

		height: 20px;
		position: relative;
		width: 100%;
		background: radial-gradient(ellipse farthest-side at top center, var(--colorOne), transparent);
	}

	.divider-sm:before {
		content: '';
		display: block;
		position: absolute;
		top: 0px;
		right: 0;
		left: 0;
		height: 30px;
		background: linear-gradient(
			to right,
			transparent,
			var(--colorTwo),
			var(--colorTwo),
			transparent
		);
	}
</style>
