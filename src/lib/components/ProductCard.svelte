<script lang="ts">
	import MdAddShoppingCart from "svelte-icons/md/MdAddShoppingCart.svelte";
	import type { Product } from "../../routes/+page";
	import Button from "./Button.svelte";
	import Price from "./Price.svelte";
	import Card from "./card/Card.svelte";

  export let product: Product;
</script>

<Card class="mr-5 lg:mr-auto" image={product.images[0]} let:Body>
  <Body let:Action let:Title>
    <Title>{product.title}</Title>
    <div class="flex items-center">
      <div class="rating mr-2 w-24">
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
      </div>
      <p>{product.rating}</p>
    </div>
    <Action>
      <Price>{product.price}</Price>
      <Button rounded="xl">
        <div slot="icon" class="w-6 h-6">
          <MdAddShoppingCart />
        </div>
        ADD TO CART
      </Button>
    </Action>
  </Body>
</Card>