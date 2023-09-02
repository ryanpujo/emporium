<script lang="ts">
	import type { Product } from "./+page";

  export let product: Product;
  let clazz = "";
  export {clazz as class};
</script>


  <div {...$$restProps} class={"card card-compact md:card-side " + clazz}>
    <figure><img src={product.images[0]} alt="product"></figure>
    <div class="card-body">
      <h2 class="card-title">
        {product.title}
      </h2>
      <p class="">{product.description}</p>
      <p class="font-bold text-lg">${product.price}</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{product.category}</div>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
