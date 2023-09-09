<script lang="ts">
	import type { PageData } from './$types';
	import Homepage from './Homepage.svelte';
	import productsStore from '$lib/stores/productsStore';
	export let data: PageData;
	productsStore.set(data.products)
</script>

<svelte:head>
	<title>Somebody to love</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Homepage />


