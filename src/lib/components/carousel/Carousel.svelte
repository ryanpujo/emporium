<script>
	import Item from "./Item.svelte";

let clazz = "";
export {clazz as class};
</script>

<div class={"carousel carousel-center rounded-box w-full md:w-auto " + clazz}>
  <slot {Item} />
</div>