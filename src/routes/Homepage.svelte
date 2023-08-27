<script lang="ts">
	import type { PageData } from "./$types";
	import Hero from "./Hero.svelte";
	import ProductCard from "./ProductCard.svelte";

	export let items: PageData;
	
</script>

<section class="">
	<Hero 
		class="bg-mobile-banner mb-4 md:bg-desktop-banner hero md:aspect-desktop-banner aspect-mobile-banner bg-contain bg-no-repeat"
		title="ddnrkrdjnjnterjnet"
		copyWrite="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
		buttonText="Discover More"
	/>
  <div class="mx-10">
    <p class="text-gray-500 font-bold ">Womens Clothing</p>
    <div class="flex justify-between mb-4">
      <h4 class="text-xl font-bold">Beauty at hand</h4>
      <a class="btn btn-primary btn-xs rounded-md" href="#">View all</a>
    </div>
		<div class="carousel w-96 md:w-auto md:flex md:justify-between">
			{#each items.products as product (product.id)}
				<ProductCard class="card card-compact w-1/2 md:w-96 carousel-item bg-base-100 shadow-xl mr-5" {product} />
			{/each}
		</div>
  </div>
</section>