<script>
	import Button from '$lib/components/Button.svelte';
	import Cta from '$lib/components/CTA.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import NextArrowIcon from '$lib/icons/NextArrowIcon.svelte';
	import screenshot from '$lib/images/screenshot.png';
	import clsx from 'clsx';
	import modelsImg from '$lib/images/keyFeatures/models.svg';
	import complianceImg from '$lib/images/keyFeatures/compliance.svg';
	import ragImg from '$lib/images/keyFeatures/rag.svg';
	import routingImg from '$lib/images/keyFeatures/routing.svg';
	import integrationImg from '$lib/images/keyFeatures/integration.svg';

	const items = [
		{
			img: ragImg,
			title: 'Retrieval-Augmented Generation (RAG)',
			description: `Lorem Ipsum`,
			href: '/features/rag'
		},
		{
			title: 'Enterprise SaaS Products Integration',
			description: `Lorem Ipsum`,
			href: '/features/integration',
			img: integrationImg
		},
		{
			title: 'LLM Routing',
			description: `Lorem Ipsum`,
			href: '/features/llm-routing',
			img: routingImg
		},
		{
			title: 'Access to the Best AI Models',
			description: `Lorem Ipsum`,
			href: '/features/models',
			img: modelsImg
		},
		{
			title: 'Enterprise Identity Integration and IAM',
			description: `Lorem Ipsum`,
			href: '/features/iam',
			img: complianceImg
		}
	];
</script>

<PageLayout title="Features" subtext="Lorem Ipsum is what is going on here">
	<div class="container mb-24 mt-24">
		<div class="mt-20 grid gap-16">
			{#each items as { title, description, href, img }, index}
				<div
					class="group relative grid gap-4 opacity-85 transition-opacity duration-300 hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
				>
					<div class="col-span-1 flex flex-col justify-center gap-4">
						<h3 class="text-4xl">
							{title}
						</h3>
						<div class="max-w-md">
							{description}
						</div>

						<Button outline {href}>
							Read More
							<NextArrowIcon />
						</Button>
					</div>

					<div class={clsx('relative lg:col-span-2', index % 2 && 'md:-order-1')}>
						<div
							class="image-glow absolute -bottom-8 -left-4 h-1/2 w-1/2 rounded-full bg-blue-500 opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30"
						></div>
						<div
							class="image-glow absolute -right-4 -top-8 h-1/2 w-1/2 rounded-full bg-teal-500 opacity-0 mix-blend-screen blur-3xl transition-opacity duration-500 group-hover:opacity-30"
						></div>
						<img
							src={img || screenshot}
							alt={title}
							sizes="(max-width: 768px) 100vw, 50vw"
							class="z-20 scale-[.98] transition-transform duration-300 group-hover:scale-100"
						/>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<Cta bgColor="blue" />
</PageLayout>
