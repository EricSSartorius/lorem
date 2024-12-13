<script>
	import clsx from 'clsx';
	import { page } from '$app/stores';

	export let isOpen = false;
	export const toggleOpen = () => (isOpen = !isOpen);
</script>

<nav
	class={clsx(
		'mobile-nav fixed inset-0 z-40 flex flex-col items-end bg-gray-950 pr-4 pt-6 transition-transform duration-300 ease-in-out md:hidden',
		isOpen ? 'translate-x-0' : 'translate-x-[100%]'
	)}
>
	<ul class="mt-6 grid justify-items-end gap-8">
		<li class="text-2xl">
			<a
				onclick={toggleOpen}
				href="/features"
				class:active={$page.url.pathname.startsWith('/features')}>Features</a
			>
		</li>
		<li class="text-2xl">
			<a
				onclick={toggleOpen}
				href="/platform"
				class:active={$page.url.pathname.startsWith('/platform')}>Platform</a
			>
		</li>
		<li class="text-2xl">
			<a
				onclick={toggleOpen}
				href="/solutions"
				class:active={$page.url.pathname.startsWith('/solutions')}>Solutions</a
			>
		</li>
		<li class="text-2xl">
			<a
				onclick={toggleOpen}
				href="/pricing"
				class:active={$page.url.pathname.startsWith('/pricing')}>Pricing</a
			>
		</li>
		<li class="text-2xl">
			<a
				onclick={toggleOpen}
				href="/company"
				class:active={$page.url.pathname.startsWith('/company')}>Company</a
			>
		</li>
	</ul>
</nav>

<style>
	.mobile-nav {
		--mobile-navigation-height: 2.8rem;

		background: rgb(0 2 18);
		top: var(--mobile-navigation-height);
		height: calc(100vh - var(--mobile-navigation-height));
	}

	nav a.active {
		color: var(--secondary);
	}

	nav a:hover {
		color: rgba(30, 210, 230, 80%);
	}
</style>
