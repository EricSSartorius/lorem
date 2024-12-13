<script>
	import CTA from '$lib/components/CTA.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import PricingChart from './PricingChart.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<PageLayout title="Pricing" subtext="Lorem Ipsum is what is going on here">
	<div class="mt-8 flex flex-col-reverse items-center justify-center gap-4 md:flex-row">
		<Button outline>Get Started</Button>
		<Button href="/contact">Contact Sales</Button>
	</div>
	<div class="my-24">
		<PricingChart />
	</div>

	<div class="container mt-24">
		<div class="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<h3 class="text-3xl">Custom Solutions</h3>

				<p class=" mt-4 max-w-md text-balance text-gray-300">
					We have some good solutions you can try on fior size. a little lorem ipsum to fill the
					gap.
				</p>
				<Button href="/contact" class="mt-6">Schedule a Consultation</Button>
			</div>
			<ul>
				<li>
					<h5>ima solution</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore impedit vero.
					</p>
				</li>
				<li>
					<h5>ima solution</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore impedit vero.
					</p>
				</li>
				<li>
					<h5>ima solution</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore impedit vero.
					</p>
				</li>
				<li>
					<h5>ima solution</h5>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolore impedit vero.
					</p>
				</li>
			</ul>
		</div>
	</div>
</PageLayout>
