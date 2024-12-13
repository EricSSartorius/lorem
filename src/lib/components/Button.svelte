<script>
	import clsx from 'clsx';

	let {
		children,
		active = false,
		outline = false,
		small = false,
		href = undefined,
		class: className = '',
		...props
	} = $props();

	const classes =
		'relative inline-flex items-center gap-1 h-fit w-fit cursor-pointer rounded-full px-4 py-2 outline-none ring-teal-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-teal-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 focus:ring-2';
	const solidClasses =
		'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-blue-600 hover:to-teal-600';
	const outlineClasses =
		'border border-blue-100/20 bg-blue-200/10 text-blue-200 hover:border-blue-200/40 hover:text-blue-300 after:hover:bg-opacity-15';
	const sizeClasses = small ? 'px-[8px] py-[4px] text-sm' : '';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={clsx(classes, outline ? outlineClasses : solidClasses, sizeClasses, className)}
	{...props}
>
	{@render children()}
</svelte:element>
