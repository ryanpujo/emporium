export type Product = {
	id: number;
	title: string;
	price: number;
	images: string[];
	description: string;
	category: string;
};
// export const load: PageLoad = async () => {
// 	const res = await fetch(
// 		'https://dummyjson.com/products?limit=4&skip=30&select=title,price,images,description'
// 	);
// 	const products: Product[] = (await res.json()).products;
// 	return {
// 		products
// 	};
// };
