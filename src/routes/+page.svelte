<script>
	import CTA from '$lib/components/CTA.svelte';
	import Hero from './Hero.svelte';
	import Integrations from './Integrations.svelte';
	import KeyFeatures from './KeyFeatures.svelte';
	import Platform from './Platform.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import Models from './Models.svelte';
</script>

<Seo title="Home" />

<Hero />
<Integrations />
<Platform />
<Models />
<KeyFeatures />

<CTA />
