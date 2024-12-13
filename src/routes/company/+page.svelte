<script>
	import Button from '$lib/components/Button.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import NextArrowIcon from '$lib/icons/NextArrowIcon.svelte';
	import screenshot from '$lib/images/screenshot.png';
</script>

<PageLayout title="Company" subtext="Lorem Ipsum is what is going on here">
	<div class="container mt-24">
		<div class="mt-6 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2">
			<div class="order-2 md:order-1">
				<h3 class="text-3xl">Mission and Story</h3>

				<p class=" mt-4 max-w-md text-balance text-gray-300">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p class=" mt-4 max-w-md text-balance text-gray-300">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<Button href="/careers" class="mt-6">Explore Careers <NextArrowIcon /></Button>
			</div>
			<div class="order-1 mx-auto mb-6 w-full md:order-2 md:w-96">
				<img class="rounded-3xl" src={screenshot} alt="Lorem Dashboard" />
			</div>
		</div>
		<Hr size="sm" class="my-12" />
	</div>

	<div class="container">
		<h2 class="h2">
			Lorem's <span class="gradient-text">Leadership</span>
		</h2>

		<div class="mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-4">
			<div class="space-y-1">
				<img class="rounded-3xl" src={screenshot} alt="Lorem Dashboard" />
				<h6 class="text-lg font-semibold">John Doe</h6>
				<p class="text-gray-500">Job Title</p>
			</div>
			<div class="space-y-1">
				<img class="rounded-3xl" src={screenshot} alt="Lorem Dashboard" />
				<h6 class="text-lg font-semibold">John Doe</h6>
				<p class="text-gray-500">Job Title</p>
			</div>
			<div class="space-y-1">
				<img class="rounded-3xl" src={screenshot} alt="Lorem Dashboard" />
				<h6 class="text-lg font-semibold">John Doe</h6>
				<p class="text-gray-500">Job Title</p>
			</div>
			<div class="space-y-1">
				<img class="rounded-3xl" src={screenshot} alt="Lorem Dashboard" />
				<h6 class="text-lg font-semibold">John Doe</h6>
				<p class="text-gray-500">Job Title</p>
			</div>
		</div>
	</div>
</PageLayout>
