<script>
	import MdAddShoppingCart from 'svelte-icons/md/MdAddShoppingCart.svelte';
  let clazz = "";
  export {clazz as class};
</script>

<div class={"w-8 h-8 mr-4 btn btn-ghost btn-square " + clazz}>
  <MdAddShoppingCart />
</div>