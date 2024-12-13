<script>
	import Button from '$lib/components/Button.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import ChevronIcon from '$lib/icons/ChevronIcon.svelte';
</script>

<PageLayout
	title="Retrieval-Augmented Generation (RAG)"
	subtext="Lorem Ipsum is what is going on here"
>
	<div class="page-content tight container my-24">
		<h2>Lorem Ipsum</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa.
			<strong>Nullam</strong> dictum felis eu pede mollis pretium.
		</p>

		<h3>Lorem Ipsum</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa.
		</p>
		<ul>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
		</ul>

		<h3>Lorem Ipsum</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa.
		</p>

		<h3>Lorem Ipsum</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa.
		</p>
		<ul>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
		</ul>

		<h3>Lorem Ipsum</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		<ul>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li>
				<strong>Lorem Ipsum:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
		</ul>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa.
		</p>
	</div>
	<div class="mt-16 flex justify-center">
		<Button outline href="/features"><ChevronIcon reverse /> Explore Features</Button>
	</div>
</PageLayout>
