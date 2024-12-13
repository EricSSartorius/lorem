<script>
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import Bounded from '$lib/components/Bounded.svelte';
	import Button from '$lib/components/Button.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce').matches;

		if (prefersReducedMotion) {
			gsap.set('.hero__heading, .hero__body, .hero__button, .hero__image, .hero__glow', {
				opacity: 1
			});

			return;
		}

		const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

		tl.fromTo('.hero__heading', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.4 });
		tl.fromTo('.hero__body', { y: 20 }, { y: 0, opacity: 1, duration: 1.2 }, '-=0.6');
		tl.fromTo('.hero__button', { scale: 1.5 }, { scale: 1, opacity: 1, duration: 1.3 }, '-=0.8');
		tl.fromTo('.hero__image', { y: 100 }, { y: 0, opacity: 1, duration: 1.3 }, '-=0.8');
		tl.fromTo('.hero__glow', { scale: 0.5 }, { scale: 1, opacity: 1, duration: 1.8 }, '-=1');

		gsap.to('.hero__glow--one', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '0%', left: '33%', duration: 0 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 }
			]
		});

		gsap.to('.hero__glow--two', {
			ease: 'power2.inOut',
			repeat: -1,
			repeatDelay: 0,
			keyframes: [
				{ top: '33%', left: '0%', duration: 0 },
				{ top: '0%', left: '0%', duration: 2 },
				{ top: '0%', left: '33%', duration: 3 },
				{ top: '33%', left: '33%', duration: 2 },
				{ top: '33%', left: '0%', duration: 3 }
			]
		});
	});
</script>

<Bounded>
	<div class="pb-[6.4rem] md:pb-[10.6rem]">
		<div class="container pt-[6.4rem]">
			<div class="relative text-center">
				<h1
					class="hero__heading mx-auto max-w-3xl text-balance text-5xl font-medium opacity-0 md:text-7xl"
				>
					Focus on Innovation, Not Infrastructure
				</h1>

				<p class="hero__body mx-auto mt-6 max-w-md text-balance text-xl text-gray-300 opacity-0">
					Empower your AI journey with the right tools. Build, connect, log, and comply.
				</p>

				<Button class="hero__button mt-8 opacity-0">Get Started<ChevronIcon /></Button>

				<div class="hero__image glass-container mt-16 opacity-0">
					<div
						class="hero__glow hero__glow--one absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-blue-700/50 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
					></div>
					<div
						class="hero__glow hero__glow--two absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 opacity-0 mix-blend-screen blur-3xl filter md:blur-[120px]"
					></div>
					<div class="embed-container m2">
						<iframe
							src="https://player.vimeo.com/video/759831525"
							frameborder="0"
							title="Lorem Ipsum"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</div>
</Bounded>

<style>
	.hero__glow--one {
		background-color: rgba(54, 118, 227, 50%);
	}

	.hero__glow--two {
		background-color: rgba(30, 210, 230, 50%);
	}

	.embed-container {
		position: relative;
		padding-bottom: 56.25%;
		height: 0;
		overflow: hidden;
		max-width: 100%;
	}
	.embed-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
