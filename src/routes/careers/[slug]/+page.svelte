<script>
	import Button from '$lib/components/Button.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

{#if data}
	<PageLayout seoTitle={data.meta.title} seoDescription={data.meta.description} hasBlob>
		<article class="tight container">
			<h2
				class="max-w-2xl text-balance bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text py-2 text-5xl font-medium text-transparent md:text-6xl"
			>
				{data.meta.title}
			</h2>
			<h6 class="mt-2 max-w-xl text-balance">
				Posted: {formatDate(data.meta.date)}
			</h6>
			<h4 class="mt-2 max-w-xl text-balance text-gray-400">
				Location: {data.meta.location}
			</h4>

			<div class="page-content my-16 text-lg">
				<svelte:component this={data.content} />
			</div>
		</article>

		<div class="mt-16 flex justify-center">
			<Button outline href="/careers"><ChevronIcon reverse /> Back to Careers</Button>
		</div>
	</PageLayout>
{/if}
