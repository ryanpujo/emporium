<script lang="ts">
	import type { Product } from "../../../routes/+page";
	import Body from "./Body.svelte";
let clazz = "";
export {clazz as class};
export let image: string;
</script>

<div {...$$restProps} 
  class={"card card-compact max-w-xs rounded-xl border-2 border-gray-100 shadow-xl " + clazz}>
  <figure class="w-full h-52"><img src={image} alt="product"></figure>
  <slot {Body}/>
</div>