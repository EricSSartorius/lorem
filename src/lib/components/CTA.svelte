<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import type { Snippet } from 'svelte';
	import clsx from 'clsx';
	import ShortLogo from '$lib/images/ShortLogo.svelte';

	let {
		children = undefined,
		title = `Get Started Today`,
		bgColor = 'teal',
		buttons = undefined
	}: {
		children?: Snippet;
		buttons?: Snippet;
		title?: string;
		bgColor?: 'blue' | 'teal';
	} = $props();
</script>

<Bounded class="relative py-32 text-center font-medium md:py-40">
	<div
		class={clsx(
			'glow absolute -z-10 aspect-square w-full max-w-sm rounded-full blur-[160px] filter',
			{
				'bg-blue-500/50': bgColor === 'blue',
				'bg-teal-500/50': bgColor === 'teal'
			}
		)}
	></div>
	<div
		class="rounded-lg p-4 md:rounded-xl
	"
	>
		<span class="text-8xl font-bold">🤖</span>
	</div>

	<h2 class="mt-8 max-w-xl text-balance text-5xl">{title}</h2>
	{#if children}
		{@render children()}
	{/if}
	<div class="mt-8 flex flex-col-reverse items-center justify-center gap-4 md:flex-row">
		{#if buttons}
			{@render buttons()}
		{:else}
			<Button href="/contact" outline>Schedule A Demo</Button>
			<Button href="/contact">Contact Us</Button>
		{/if}
	</div>
</Bounded>
