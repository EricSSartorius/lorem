import { json } from '@sveltejs/kit';

export type Career = {
	title: string;
	description: string;
	location: string;
	slug: string;
	date: string;
	published?: boolean;
};

async function getCareers() {
	const careers: Career[] = [];

	const paths = import.meta.glob('/src/careers/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Career, 'slug'>;
			const career = {
				...metadata,
				slug: `/careers/${slug}`
			} as Career;
			careers.push(career);
		}
	}

	return careers.filter(({ published }) => published).sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function GET() {
	const careers = await getCareers();
	return json(careers);
}
