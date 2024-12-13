import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const career = await import(`../../../careers/${params.slug}.md`);

		return {
			content: career.default,
			meta: career.metadata
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
