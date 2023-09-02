<script lang="ts">
	import type { PageData } from "./$types";
	import type { Product } from "./+page";
	import ProductCard from "./ProductCard.svelte";

  export let title: string;
  export let copyWrite: string;
  export let href: string = "#";
  export let category = "";
  async function getProductsByCategory() {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=4`);
    const json: Product[] = (await res.json()).products;
    return json
  }
  const promise = getProductsByCategory();
</script>

<div class="mx-10 mb-10">
  <p class="text-gray-500 font-bold ">{title}</p>
  <div class="flex justify-between mb-4">
    <h4 class="text-xl font-bold">{copyWrite}</h4>
    <a class="btn btn-primary btn-xs rounded-md" {href}>View all</a>
  </div>
  <div class="carousel w-96 md:w-auto md:flex md:justify-between">
    {#await promise}
      <div class="flex justify-center w-full">
        <span class="loading loading-spinner loading-md"></span>
      </div>
    {:then products} 
      {#each products as product (product.id)}
        <ProductCard class="w-1/2 md:w-96 carousel-item bg-base-100 shadow-xl mr-5" {product} />
      {/each}
    {/await}
  </div>
</div>