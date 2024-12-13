<script>
	let isThankYouShowing = false;
	let email = '';

	const onsubmit = (e) => {
		e.preventDefault();
		fetch('https://formspree.io/f/mdkneeoo', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email,
				message: 'Newsletter Subscription'
			})
		})
			.then((res) => {
				if (res.ok) {
					isThankYouShowing = true;
					email = '';
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

<p class="mb-1">Subscribe to our newsletter!</p>
<form class="inline-flex" {onsubmit} action="https://formspree.io/f/mnnapjyq" method="POST">
	{#if isThankYouShowing}
		<p style="height:60.5px" class="gradient-text pt-2 text-lg">Thank you for joining!</p>
	{:else}
		<input
			bind:value={email}
			type="email"
			id="email"
			name="email"
			class="subscribe-input border-grey-dark h-full w-full p-2 outline-none ring-teal-300"
		/><button
			type="submit"
			class="subscribe-btn relative inline-flex h-fit h-full w-fit cursor-pointer items-center gap-1 bg-gradient-to-r from-blue-500 to-teal-500 px-2 py-2 text-white outline-none ring-teal-300 transition-colors after:absolute after:inset-0 after:-z-10 after:animate-pulse after:bg-teal-100 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:from-blue-600 hover:to-teal-600 focus:ring-2"
			>Join</button
		>
	{/if}
</form>

<style>
	.subscribe-btn {
		border-radius: 0 0.5rem 0.5rem 0;
	}

	.subscribe-input {
		border-radius: 0.25rem 0 0 0.25rem;
		background: rgb(3 7 18 / var(--tw-bg-opacity));
		border: 1px solid #4b5563;
	}

	form {
		width: 240px;
	}
</style>
