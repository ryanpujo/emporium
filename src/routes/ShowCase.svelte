<script lang="ts">
	import { onMount } from "svelte";
	import type { Product } from "./+page.server";
	import Carousel from "$lib/components/carousel/Carousel.svelte";
	import ProductCard from "$lib/components/ProductCard.svelte";
	import productsStore from "$lib/stores/productsStore";
	import { CardPlaceholder } from "flowbite-svelte";

  export let title: string;
  export let copyWrite: string;
  export let href: string = "#";
  export let category = "";
  let products: Product[];
  onMount(() => {
    let index = 0;
    const filtered = $productsStore.filter((product) => {
      if (index > 4) return;
      if (product.category === category) {
        index++;
        return product
      }
    });
    
    products = [...filtered];
  });
</script>

<div class="mx-10 mb-10">
  <p class="text-gray-500 font-bold ">{title}</p>
  <div class="flex justify-between mb-4 items-center">
    <h4 class="text-xl font-bold">{copyWrite}</h4>
    <a class="link link-primary" {href}>View all</a>
  </div>
  <Carousel class="md:flex md:justify-between" let:Item>
    {#if !products}
    <CardPlaceholder/>
    <CardPlaceholder/>
    <CardPlaceholder/>
    <CardPlaceholder/>
    <CardPlaceholder/>
    {:else}
    {#each products as product (product.id)}
      <Item>
        <ProductCard {product} />
      </Item>
    {/each}
    {/if}
  </Carousel>
</div>