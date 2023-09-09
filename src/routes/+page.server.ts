import type { PageServerLoad } from './$types';

export type Product = {
	id: number;
	title: string;
	price: number;
	images: string[];
	description: string;
	category: string;
	rating: number;
};
export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('https://dummyjson.com/products?limit=1000');
	const products: Product[] = (await res.json()).products;
	return {
		products
	};
};
