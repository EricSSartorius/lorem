<script>
	import Logo from '$lib/components/Logo.svelte';
	import NewsletterInput from '$lib/components/NewsletterInput.svelte';
	import FacebookIcon from '$lib/icons/FacebookIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
	import XIcon from '$lib/icons/XIcon.svelte';
	import YoutubeIcon from '$lib/icons/YoutubeIcon.svelte';
	import clsx from 'clsx';

	const footerLinks = [
		{
			title: 'Product',
			links: [
				{ title: 'Features', href: '/features' },
				{ title: 'Platform', href: '/platform' },
				{ title: 'Solutions', href: '/solutions' }
			]
		},
		{
			title: 'Company',
			links: [
				{ title: 'About', href: '/company' },
				{ title: 'Blog', href: '/posts' },
				{ title: 'Careers', href: '/careers' }
				// { title: "Customers", href: "#" },
				// { title: "Brand", href: "#" },
			]
		},
		{
			title: 'Resources',
			links: [
				// { title: "Whitepapers & E-books", href: "#" },
				// { title: 'Support', href: '/support' },
				{ title: 'Pricing', href: '/pricing' },
				// { title: 'Docs', href: '#' },
				{ title: 'Contact', href: '/contact' }
				// { title: 'Partners', href: '/partners' },
				// { title: "Webinars & Events", href: "#" },
				// { title: "Terms of service", href: "#" },
			]
		}
	];
</script>

<footer class="border-transparent-white mt-12 border-t pb-6 pt-[5.6rem] text-sm">
	<div class={clsx('mx-auto flex max-w-[120rem] flex-col justify-between px-8 lg:flex-row')}>
		<div>
			<div class="flex h-full flex-row flex-wrap justify-between lg:flex-col">
				<div class="text-grey mb-6 mr-6 flex items-center">
					<!-- <Logo /> -->
					<span class="font-bold">🤖 Lorem</span>
				</div>
				<div class="md:hidden">
					<NewsletterInput />
				</div>
			</div>
		</div>
		<div class="mb-6 flex flex-wrap gap-4">
			{#each footerLinks as column}
				<div class="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[12rem]">
					<h3 class="mb-3 font-medium">{column.title}</h3>
					<ul>
						{#each column.links as link}
							<li class="[&_a]:last:mb-0">
								<a
									class="text-grey hover:text-off-white mb-3 block transition-colors"
									href={link.href}
								>
									{link.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
			<!-- <div class="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[12rem]">
			</div> -->
		</div>
		<div class="flex justify-between lg:flex-col">
			<div class="hidden md:block">
				<NewsletterInput />
			</div>

			<div>
				<div class="text-grey mt-20 flex justify-end space-x-4">
					<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
						<LinkedInIcon />
					</a>

					<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
						<YoutubeIcon />
					</a>

					<a href="https://x.com/" target="_blank" rel="noopener noreferrer">
						<XIcon />
					</a>

					<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
						<FacebookIcon />
					</a>
				</div>
				<p class="text-grey mt-1 text-xs md:text-right">
					Lorem &copy;{new Date().getFullYear()}
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	a:hover {
		color: #f7f8f8;
	}
</style>
