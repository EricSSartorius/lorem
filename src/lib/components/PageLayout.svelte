<script>
	import BlobWrapper from './BlobWrapper.svelte';
	import Seo from './SEO.svelte';

	let {
		children,
		hasBlob = false,
		title = '',
		seoDescription = '',
		seoTitle = '',
		subtext = '',
		heading = undefined
	} = $props();
</script>

<Seo title={seoTitle || title} description={seoDescription} />

{#snippet pageHead()}
	<div class="page-wrapper gradient-bg">
		{#if heading}
			{@render heading()}
		{:else}
			<div class="container mx-auto text-center">
				{#if title}
					<h1 class="h1">{title}</h1>
				{/if}

				{#if subtext}
					<p class="mx-auto mt-2 max-w-[800px] text-balance text-center text-gray-300">
						{subtext}
					</p>
				{/if}
			</div>
		{/if}

		{@render children()}
	</div>
{/snippet}

{#if hasBlob}
	<BlobWrapper>
		{@render pageHead()}
	</BlobWrapper>
{:else}
	{@render pageHead()}
{/if}
