<script>
	import { formatDate } from '$lib/utils';

	export let post;

	$: ({ title, description, date, author, slug } = post);
</script>

<div class="py-12">
	<h2 class="mb-2 text-5xl font-bold">
		<a href={slug}>{title}</a>
	</h2>
	<p class="mb-2 text-sm text-gray-500">{formatDate(date)}</p>
	<p class="mb-2 text-lg">{description}</p>
	<p class="text-sm text-gray-500">Author: {author}</p>
</div>
