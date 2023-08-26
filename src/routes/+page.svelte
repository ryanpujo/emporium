<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Homepage from './Homepage.svelte';
</script>

<svelte:head>
	<title>Somebody to love</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Homepage/>

