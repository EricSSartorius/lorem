<script>
	import Hr from '$lib/components/Hr.svelte';
	import deploymentImg from '$lib/images/platform/deployment.png';
	import shieldImg from '$lib/images/platform/shield.svg';
	import scalableImg from '$lib/images/platform/scalable.svg';
	import chartImg from '$lib/images/platform/chart.svg';
</script>

<Hr class="mt-32" />
<div class="platform-section container relative mt-32">
	<div class="text-center">
		<h2 class="mb-4 text-3xl md:mb-7 md:text-5xl">
			Witness
			<span class="gradient-text"> The Value </span>
			<br class="hidden md:inline-block" />
			of the Lorem Platform
		</h2>
		<p class="text-primary-text mx-auto mb-12 max-w-[68rem] text-lg md:mb-7 md:text-xl">
			Gain visibility, control, and confidence in your AI.
		</p>
	</div>

	<div class=" mt-24 overflow-hidden md:h-auto md:overflow-auto">
		<div
			class="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden"
		>
			<div
				class="border-transparent-white bg-glass-gradient relative flex min-h-[28rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14"
			>
				<img src={deploymentImg} alt="Lorem Deployment" />

				<p class="mb-4 text-3xl">Simplified AI Deployment and Management</p>
				<p class="text-md text-primary-text">Eliminate the complexity of AI deployment.</p>
			</div>
			<div
				class="border-transparent-white bg-glass-gradient relative flex min-h-[28rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14"
			>
				<div class="mask-linear-faded absolute top-[1.2rem]">
					<img src={shieldImg} alt="Lorem Security" />
				</div>
				<p class="mb-4 text-3xl">Secure and Controlled AI Adoption</p>
				<p class="text-md text-primary-text">
					The latest AI technologies with complete visibility and control.
				</p>
			</div>
			<div
				class="border-transparent-white bg-glass-gradient group relative flex min-h-[28rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14"
			>
				<div class="pointer-events-none absolute top-[-1rem] w-[120%]">
					<img src={chartImg} alt="Lorem Chart" />
				</div>
				<p class="mb-4 text-3xl">Expertise and Efficiency Combined</p>
				<p class="text-md text-primary-text">
					The expertise of top AI providers in one platform at a lower cost.
				</p>
			</div>
			<div
				class="border-transparent-white bg-glass-gradient relative flex min-h-[28rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14"
			>
				<div class="pointer-events-none absolute bottom-[0rem]">
					<img src={scalableImg} alt="Lorem Scalable Graph" />
				</div>
				<div class="transition-opacity md:[.opened+&]:opacity-0">
					<p class="mb-4 text-3xl">Scalable and Reliable AI Solutions</p>
					<p class="text-md text-primary-text">
						Lorem delivers reliable and secure AI solutions that grow with you.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.border-transparent-white {
		background-image: radial-gradient(ellipse at center, rgba(54, 118, 227, 0.3), transparent);
	}
</style>
