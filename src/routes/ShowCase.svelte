<script lang="ts">
	import { onMount } from "svelte";
	import type { Product } from "./+page";
	import Card from "../lib/components/card/Card.svelte";
	import Button from "../lib/components/Button.svelte";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import Price from "$lib/components/Price.svelte";
  import MdAddShoppingCart from 'svelte-icons/md/MdAddShoppingCart.svelte'
	import ProductCard from "$lib/components/ProductCard.svelte";

  export let title: string;
  export let copyWrite: string;
  export let href: string = "#";
  export let category = "";
  async function getProductsByCategory() {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=4`);
    const json: Product[] = (await res.json()).products;
    return json
  }
  let promise: Promise<Product[]> | null;
  onMount(() => {
    promise = getProductsByCategory();
  });
</script>

<div class="mx-10 mb-10">
  <p class="text-gray-500 font-bold ">{title}</p>
  <div class="flex justify-between mb-4 items-center">
    <h4 class="text-xl font-bold">{copyWrite}</h4>
    <a class="link link-primary" {href}>View all</a>
  </div>
  <Carousel class="md:flex md:justify-between" let:Item>
    {#if promise}
      {#await promise}
        <div class="flex justify-center w-full"><span class="loading loading-spinner"></span></div>
      {:then products} 
        {#each products as product (product.id)}
          <Item>
            <ProductCard {product} />
          </Item>
        {/each}
      {/await}
    {/if}
  </Carousel>
</div>