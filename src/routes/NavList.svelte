<script lang="ts">
  export let navs: import("./Header.svelte").Nav[];
</script>


{#each navs as {id, nav, route} (id)}
	<li><a href={`${route}`}>{nav}</a></li>
{/each}