<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '@fontsource-variable/dm-sans';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main class="bg-page-gradient pt-navigation-height">
		<slot />
	</main>

	<Footer />
</div>
