<script lang="ts">
	import Cta from '$lib/components/CTA.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import GridData from '$lib/components/GridData.svelte';
	import SideBlob from '$lib/components/SideBlob.svelte';
</script>

<PageLayout
	title="Value of Platform Solution "
	subtext="Lorem brings together the best AI models and your valuable data, providing a seamless, secure, and compliant AI solution."
>
	<div class="tight container mt-24 grid gap-14 md:gap-28">
		<GridData number="1" title="Seamless Integration and Innovation">
			<p class=" mt-4 max-w-md text-balance text-lg text-gray-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</GridData>

		<Hr size="xs" />

		<GridData number="2" title="Enhanced Security and Compliance">
			<p class=" mt-4 max-w-md text-balance text-lg text-gray-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		</GridData>

		<Hr size="xs" />

		<GridData number="3" title="Efficient Orchestration and Control">
			<p class=" mt-4 max-w-md text-balance text-lg text-gray-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</GridData>

		<Hr size="xs" />

		<GridData number="4" title="Comprehensive AI Solution">
			<p class=" mt-4 max-w-md text-balance text-lg text-gray-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
			<p class=" mt-4 max-w-md text-balance text-lg text-gray-300">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua.
			</p>
		</GridData>
	</div>

	<Cta />
	<SideBlob />
</PageLayout>
