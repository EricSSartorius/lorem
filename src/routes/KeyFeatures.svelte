<script>
	import Card from '$lib/components/Card.svelte';
	import complianceImg from '$lib/images/keyFeatures/compliance.svg';
	import loggingImg from '$lib/images/keyFeatures/logging.svg';
	import dataConnectivityImg from '$lib/images/keyFeatures/data-connectivity.svg';
	import modelsImg from '$lib/images/keyFeatures/models.svg';

	const features = [
		{
			img: loggingImg,
			title: `Logging`,
			subtitle: `Transparent and Detailed Monitoring`,
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
		},

		{
			img: dataConnectivityImg,
			title: `Data Connectivity`,
			subtitle: `Seamless Integration with Your Data`,
			text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
		},
		{
			img: modelsImg,
			title: `Model Selection`,
			subtitle: `Optimal Performance Without Complexity`,
			text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
		},
		{
			img: complianceImg,
			title: `Compliance`,
			subtitle: `Robust Security and Regulatory Adherence`,
			text: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		}
	];
</script>

<div class="container px-4 py-14 first:pt-10 md:px-6 md:pb-2 md:pt-36 lg:pb-2">
	<h2 class="mb-4 text-center text-4xl md:mb-7 md:text-6xl">Features You Can Depend On</h2>

	<div
		class="
		grid w-full grid-cols-1 gap-9 text-sm md:mb-[14rem] md:grid-cols-2
	"
	>
		{#each features as { title, img, subtitle }}
			<Card hasGradientBg class="p-[0px] md:p-[0px]">
				<div class="p-8">
					<h4 class="mb-1 text-2xl text-white">{title}</h4>
					<h5 class="text-primary-text block text-lg text-gray-300 text-white md:inline">
						{subtitle}
					</h5>
				</div>
				<img class="rounded-lg" src={img} alt={title} />
			</Card>
		{/each}
	</div>
</div>
