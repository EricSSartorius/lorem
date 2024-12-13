<script>
	import { formatDate } from '$lib/utils';

	export let career;

	$: ({ title, description, date, location, slug } = career);
</script>

<div class="py-12">
	<h2 class="mb-2 text-5xl font-bold">
		<a href={slug}>{title}</a>
	</h2>
	<p class="mb-2 text-sm">{formatDate(date)}</p>
	<p class="mb-2 text-lg">{description}</p>
	<p class="text-sm text-gray-500">Location: {location}</p>
</div>
