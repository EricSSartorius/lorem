<script>
	import Button from './Button.svelte';

	let isThankYouShowing = false;
	let name = '';
	let email = '';
	let message = '';

	const onsubmit = (e) => {
		e.preventDefault();
		fetch('https://formspree.io/f/mdkneeoo', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				message
			})
		})
			.then((res) => {
				if (res.ok) {
					isThankYouShowing = true;
					name = '';
					email = '';
					message = '';
				} else {
					if (res.status === 422) {
						throw new Error('Make sure your email address is correct and try again');
					}
					throw new Error('Form could not be submitted. Please try again later.');
				}
			})
			.catch((e) => {
				console.log('e', e);
			});
	};
</script>

{#if isThankYouShowing}
	<div
		class="glass-container mt-8 flex items-center justify-center rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 text-center md:rounded-xl"
	>
		<div>
			<h2 class="text-balance text-3xl">Thank you for reaching out!</h2>
			<p class="mt-4 text-balance">We'll get back to you as soon as possible.</p>
		</div>
	</div>
{:else}
	<div
		class="glass-container mt-8 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:rounded-xl"
	>
		<form
			{onsubmit}
			class="mx-auto mt-4 max-w-lg"
			action="https://formspree.io/f/mnnapjyq"
			method="POST"
		>
			<div class="grid grid-cols-1 gap-4">
				<div>
					<label for="name" class="block text-balance">Name</label>
					<input
						type="text"
						bind:value={name}
						id="name"
						name="name"
						class="w-full rounded-md border border-gray-700 bg-[#000212] p-2 text-white"
					/>
				</div>
				<div>
					<label for="email" class="block text-balance">Email</label>
					<input
						bind:value={email}
						type="email"
						id="email"
						name="email"
						class="w-full rounded-md border border-gray-700 bg-[#000212] p-2 text-white"
					/>
				</div>
				<div>
					<label for="message" class="block text-balance">Message</label>
					<textarea
						bind:value={message}
						id="message"
						name="message"
						rows="5"
						class="w-full rounded-md border border-gray-700 bg-[#000212] p-2 text-white"
					></textarea>
				</div>
				<div class="flex justify-end">
					<Button type="submit">Submit</Button>
				</div>
			</div>
		</form>
	</div>
{/if}
