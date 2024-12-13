<script lang="ts">
	import type { Snippet } from 'svelte';
	import Card from './Card.svelte';

	let {
		children,
		number = undefined,
		title
	}: {
		children: Snippet;
		number?: number | string;
		title: string;
	} = $props();

	// 2 col grid, left side is title and number, right side is description (used on platform page)
</script>

<div class="mt-6 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2">
	<Card class="flex flex-col justify-between md:p-12">
		{#if number}<h2 class="mb-4 text-7xl">{number}</h2>{/if}

		<h3 class="text-3xl">{title}</h3>
	</Card>
	<div>
		{@render children()}
	</div>
</div>
