<script>
	// import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/Button.svelte';
	import clsx from 'clsx';
	import { page } from '$app/stores';
	import MobileNav from './MobileNav.svelte';

	let isOpen = false;
	const toggleOpen = () => (isOpen = !isOpen);
	const close = () => (isOpen = false);
</script>

<header
	class="border-transparent-white fixed left-0 top-0 z-10 w-full border-b py-2 backdrop-blur-[12px]"
>
	<div class={clsx('h-navigation-height mx-auto flex max-w-[120rem] px-8')}>
		<a class="text-md flex items-center" href="/">
			<!-- <Logo /> -->
			<span class="font-bold">🤖 Lorem</span>
		</a>

		<div
			class={clsx(
				'flex items-center transition-[visibility] md:visible',
				isOpen ? 'visible' : 'invisible delay-500'
			)}
		>
			<nav
				class={clsx(
					'top-navigation-height bg-background fixed left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
					isOpen ? 'translate-x-0 opacity-100' : 'translate-x-[-100vw] opacity-0'
				)}
			>
				<ul
					class={clsx(
						'[&_li]:border-grey-dark flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b md:[&_li]:border-none',
						'[&_a:hover]:text-grey [&_a]:h-navigation-height ease-in [&_a]:flex [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
						isOpen && '[&_a]:translate-y-0'
					)}
				>
					<li>
						<a href="/features" class:active={$page.url.pathname.startsWith('/features')}
							>Features</a
						>
					</li>
					<li>
						<a href="/platform" class:active={$page.url.pathname.startsWith('/platform')}
							>Platform</a
						>
					</li>
					<li>
						<a href="/solutions" class:active={$page.url.pathname.startsWith('/solutions')}
							>Solutions</a
						>
					</li>
					<li>
						<a href="/pricing" class:active={$page.url.pathname.startsWith('/pricing')}>Pricing</a>
					</li>
					<li>
						<a href="/company" class:active={$page.url.pathname.startsWith('/company')}>Company</a>
					</li>
				</ul>
			</nav>
		</div>

		<div class="ml-auto flex h-full items-center gap-6">
			<a href="/">Log in</a>
			<Button
				small
				onclick={close}
				href="/contact"
				active={$page.url.pathname.startsWith('/contact')}>Contact Us</Button
			>
		</div>

		<MobileNav bind:isOpen {toggleOpen} />

		<button class="menu-icon ml-6 md:hidden" onclick={toggleOpen} class:is-active={isOpen}>
			<span class="sr-only">Toggle menu</span>
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
		</button>
	</div>
</header>

<style>
	nav a.active {
		color: var(--secondary);
	}

	nav a:hover {
		color: rgba(30, 210, 230, 80%);
	}

	.menu-icon {
		transition: opacity 0.2s ease;
		outline: none;
	}
	.menu-icon:hover {
		opacity: 0.9;
	}
	.menu_icon.is-active .hamburger-inner,
	.menu_icon.is-active .hamburger-inner::before,
	.menu_icon.is-active .hamburger-inner::after,
	.menu_icon.hasHeaderBg .hamburger-inner,
	.menu_icon.hasHeaderBg .hamburger-inner::before,
	.menu_icon.hasHeaderBg .hamburger-inner::after {
		background-color: #fff;
	}

	.hamburger-box {
		width: 24px;
		height: 12px;
		display: inline-block;
		position: relative;
	}

	.hamburger-inner {
		display: block;
		top: 50%;
		/* margin-top: -2px; */
	}
	.hamburger-inner,
	.hamburger-inner::before,
	.hamburger-inner::after {
		width: 28px;
		height: 2px;
		background-color: #fff;
		border-radius: 49px;
		position: absolute;
		transition: transform 0.15s ease;
	}
	.hamburger-inner::before,
	.hamburger-inner::after {
		content: '';
		display: block;
	}
	.hamburger-inner::before {
		top: -8px;
	}
	.hamburger-inner::after {
		bottom: -8px;
	}

	.hamburger-inner {
		transition-duration: 0.22s;
		transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		&::before {
			transition:
				top 0.1s 0.25s ease-in,
				opacity 0.1s ease-in;
		}
		&::after {
			transition:
				bottom 0.1s 0.25s ease-in,
				transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}
	}

	.menu-icon.is-active .hamburger-inner {
		transform: rotate(225deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		&::before {
			top: 0;
			opacity: 0;
			transition:
				top 0.1s ease-out,
				opacity 0.1s 0.12s ease-out;
		}
		&::after {
			bottom: 0;
			transform: rotate(-90deg);
			transition:
				bottom 0.1s ease-out,
				transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
</style>
