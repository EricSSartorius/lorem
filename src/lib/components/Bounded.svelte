<script>
	import clsx from 'clsx';

	// TODO: Combine with container class and consolidate styles

	export let tag = 'section';

	let className = undefined;
	export { className as class };
</script>

<svelte:element
	this={tag}
	{...$$restProps}
	class={clsx('px-4 py-14 first:pt-10 md:px-6 md:py-20 lg:py-24', className)}
>
	<div class="mx-auto flex w-full max-w-6xl flex-col items-center">
		<slot />
	</div>
</svelte:element>
