<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import clsx from 'clsx';
	import Bounded from '$lib/components/Bounded.svelte';
	import shortLogo from '$lib/images/logo-short.svg';
	import bgImg from '$lib/images/bg.png';

	const icons = ['Llama', 'Mistral', 'Gemini', 'Claude', 'GPT-4', 'Falcon'];

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) return;

		const tl = gsap.timeline({
			repeat: -1,
			defaults: { ease: 'power2.inOut' }
		});

		tl.to('.pulsing-logo', {
			keyframes: [
				{
					filter: 'brightness(2)',
					opacity: 1,
					duration: 0.4,
					ease: 'power2.in'
				},
				{ filter: 'brightness(1)', opacity: 0.7, duration: 0.9 }
			]
		});

		tl.to(
			'.signal-line',
			{
				keyframes: [
					{ backgroundPosition: '0% 0%' },
					{
						backgroundPosition: '100% 100%',
						stagger: { from: 'center', each: 0.3 },
						duration: 1
					}
				]
			},
			'-=1.4'
		);

		tl.to(
			'.pulsing-icon',
			{
				keyframes: [
					{
						opacity: 1,
						duration: 1,
						stagger: {
							from: 'center',
							each: 0.3
						}
					},
					{
						opacity: 0.4,
						duration: 1,
						stagger: {
							from: 'center',
							each: 0.3
						}
					}
				]
			},
			'-=2'
		);
	});
</script>

<Bounded class="relative overflow-hidden">
	<img
		src={bgImg}
		alt="Lorem logo background"
		class="absolute inset-0 bottom-0 w-full
      opacity-40 brightness-90 filter"
	/>

	<div class="relative px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:pb-48 lg:pt-24">
		<h2 class="h2">Models You Know</h2>

		<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
			Integrate with models from OpenAI, Google, Meta, Anthropic, Mistral, and more.
		</div>

		<div class="mt-20 flex flex-col items-center md:flex-row">
			{#each icons as icon, index}
				{#if index === Math.floor(icons.length / 2)}
					<span class="text-8xl font-bold"> 🤖</span>
					<div class="signal-line rotate-180"></div>
				{/if}
				<div
					class="pulsing-icon flex shrink-0 items-center justify-center p-1 text-2xl text-blue-100 opacity-40"
				>
					{icon}
				</div>
				{#if index !== icons.length - 1}
					<div
						class={clsx(
							'signal-line',
							index >= Math.floor(icons.length / 2) ? 'rotate-180' : 'rotate-0'
						)}
					></div>
				{/if}
			{/each}
		</div>
	</div>
</Bounded>
