<script lang="ts">
	import Hr from '$lib/components/Hr.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import PostPreview from './PostPreview.svelte';

	export let data;
</script>

<PageLayout title="Blog" subtext="Lorem Ipsum is what is going on here">
	<div class="tight container my-24">
		{#each data.posts as post, index}
			<PostPreview {post} />
			{#if index < data.posts.length - 1}
				<Hr />
			{/if}
		{/each}
	</div>
</PageLayout>
