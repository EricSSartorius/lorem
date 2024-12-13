<script>
	import clsx from 'clsx';

	let { children, class: className = '', hasGradientBg = false } = $props();
</script>

<div
	class:hasGradientBg
	class={clsx(
		'bg-glass-gradient border-transparent-white before:bg-glass-gradient bg-[radial-gradient(ellipse_at_center,rgba(54, 118, 227, 0.15),transparent)] relative overflow-hidden rounded-[2.4rem] border px-8 py-6 before:pointer-events-none before:absolute before:inset-0 md:rounded-[2.4rem] md:p-14',
		className
	)}
>
	{@render children()}
</div>

<style>
	div.hasGradientBg {
		background-image: radial-gradient(ellipse at center, rgba(54, 118, 227, 0.15), transparent);
	}
</style>
