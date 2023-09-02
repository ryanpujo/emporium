<script lang="ts">
	import type { PageData } from "./$types";
	import Carousel from "./Carousel.svelte";
	import Hero from "./Hero.svelte";

	
</script>

<section class="">
	<Hero 
		class="bg-mobile-banner mb-4 md:bg-desktop-banner md:aspect-desktop-banner aspect-mobile-banner bg-contain bg-no-repeat"
		title="ddnrkrdjnjnterjnet"
		copyWrite="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
	/>
	<Carousel 
		title="Women's Clothing"
		copyWrite="Beauty at Hand"
		category="womens-dresses"
	/>
	<Hero class="bg-hero-banner aspect-mobile-banner md:aspect-desktop-banner bg-no-repeat mb-5" 
		title="your wish"
		copyWrite="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
	/>
	<Carousel 
		title="mens-shirts"
		copyWrite="Masculinity at Hand"
		category="mens-shirts"
	/>
</section>