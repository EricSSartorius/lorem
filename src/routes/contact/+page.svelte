<script>
	import ContactForm from '$lib/components/ContactForm.svelte';
	import Hr from '$lib/components/Hr.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout hasBlob>
	<div class="container mb-24">
		<div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<h2
					class="max-w-2xl text-balance bg-gradient-to-b from-blue-50 to-blue-300 bg-clip-text py-2 text-5xl font-medium text-transparent md:text-7xl"
				>
					How can we help?
				</h2>
				<p class="mt-2 max-w-xl text-balance">
					Get in touch with us to learn more about our products and services, or to schedule a demo.
				</p>
				<Hr size="sm" class="my-12" />
				<h3 class="text-2xl">Lorem HQ</h3>
				<p class="my-4 max-w-md text-balance text-gray-300">
					123 Main St
					<br />
					Anytown, USA 12345
				</p>
				<a href="tel:517-330-0000" class="mt-4 text-balance text-gray-300">
					<strong> (555) 555-5555 </strong>
				</a>
			</div>

			<ContactForm />
		</div>
	</div>
</PageLayout>
