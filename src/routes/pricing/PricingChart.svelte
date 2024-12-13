<script>
	const pricingTiers = [
		{
			title: 'Starter',
			price: 'Free!',
			features: ['Model Selection', ' Data Connectivity', 'Compliance']
		},
		{
			title: 'Professional',
			price: '$19',
			features: [
				'Model Selection',
				' Data Connectivity',
				'Compliance',
				'Model Selection',
				' Data Connectivity',
				'Compliance'
			]
		},
		{
			title: 'Enterprise',
			price: '$49',
			isHighlighted: true,
			features: [
				'Model Selection',
				' Data Connectivity',
				'Compliance',
				'Model Selection',
				' Data Connectivity',
				'Compliance',
				'Model Selection',
				' Data Connectivity',
				'Compliance'
			]
		}
	];
</script>

<div class="container mt-6">
	<div class="mt-6 mt-6 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
		{#each pricingTiers as { title, price, features, isHighlighted }}
			<div
				class="bg-glass-gradient border-transparent-white before:bg-glass-gradient bg-[radial-gradient(ellipse_at_center,rgba(54, 118, 227, 0.15),transparent)] relative overflow-hidden rounded-[2.4rem] border px-8 py-6 before:pointer-events-none before:absolute before:inset-0 md:rounded-[4.8rem] md:p-14 {isHighlighted
					? 'border-primary'
					: 'border-transparent'}"
			>
				<h3 class="mb-2 text-center text-xl text-white">{title}</h3>
				<p class="text-primary-text max-w-[31rem] text-center text-3xl">{price}</p>
				<div class="mt-6 border-t py-6">
					{#each features as feature}
						<p class="text-md mt-2">✅ {feature}</p>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.border-primary {
		border-color: rgba(225, 225, 227, 0.3);
		background-image: radial-gradient(ellipse at center, rgba(54, 118, 227, 0.1), transparent);
	}
</style>
