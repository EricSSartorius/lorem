import type { Career } from '../api/careers/+server';

export async function load({ fetch }) {
	const response = await fetch('api/careers');
	const careers: Career[] = await response.json();
	return { careers };
}
