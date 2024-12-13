<script>
	import Atlassian from '$lib/logos/Atlassian.svelte';
	import Aws from '$lib/logos/Aws.svelte';
	import IbmCloud from '$lib/logos/IbmCloud.svelte';
	import Microsoft from '$lib/logos/Microsoft.svelte';
	import Mongodb from '$lib/logos/Mongodb.svelte';
	import Oracle from '$lib/logos/Oracle.svelte';
	import SalesForce from '$lib/logos/SalesForce.svelte';
	import ServiceNow from '$lib/logos/ServiceNow.svelte';
	import Slack from '$lib/logos/Slack.svelte';
	import MySql from '$lib/logos/MySql.svelte';
	import Workday from '$lib/logos/Workday.svelte';
	import MicrosoftOffice from '$lib/logos/MicrosoftOffice.svelte';
</script>

<div class="container">
	<p class="mb-12 text-center text-lg text-white md:text-xl">
		<span class="text-primary-text"
			>Seamlessly connect Lorem with your enterprise data sources.</span
		>
		<br class="hidden md:block" /> Ensure relevant and timely information for AI processing.
	</p>

	<div
		class="flex flex-wrap items-center justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]"
	>
		<Atlassian />
		<Aws />
		<IbmCloud />
		<Microsoft />
		<MicrosoftOffice />
		<Mongodb />
		<MySql />
		<Oracle />
		<SalesForce />
		<ServiceNow />
		<Slack />
		<Workday />
	</div>
</div>
