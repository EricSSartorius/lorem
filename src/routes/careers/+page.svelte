<script lang="ts">
	import Hr from '$lib/components/Hr.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import CareerPreview from './CareerPreview.svelte';

	export let data;
</script>

<PageLayout
	title="Careers at Lorem"
	subtext="Join our innovative team at Lorem and help shape the future of AI technology. We are looking for talented and passionate individuals to fill the following open positions"
>
	<div class="tight container my-24">
		{#each data.careers as career, index}
			<CareerPreview {career} />

			{#if index < data.careers.length - 1}
				<Hr />
			{/if}
		{/each}
	</div>
</PageLayout>
