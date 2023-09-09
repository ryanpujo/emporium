import { writable } from 'svelte/store';
import type { Product } from '../../routes/+page.server';

const products = writable<Product[]>([]);

export default {
	subscribe: products.subscribe,
	set: products.set
};
