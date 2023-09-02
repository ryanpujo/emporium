<script lang="ts">
	import type { PageData } from './$types';
	import Homepage from './Homepage.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Somebody to love</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Homepage products={data}/>


