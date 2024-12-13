<script>
	import clsx from 'clsx';

	let { children, outline = false, class: className = '', ...props } = $props();
</script>

<span
	class={clsx(
		'text-off-white border-transparent-white backdrop-filter-[12px] relative inline-flex h-8 items-center rounded-full border bg-white bg-opacity-10 px-4 text-sm transition-colors ease-in',
		'[&_.highlight]:bg-transparent-white [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:last-child]:ml-2 [&_.highlight]:rounded-full [&_.highlight]:px-2'
	)}
	{...props}
>
	{@render children()}
</span>
