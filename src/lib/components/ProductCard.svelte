<script lang="ts">
	import MdAddShoppingCart from "svelte-icons/md/MdAddShoppingCart.svelte";
	import type { Product } from "../../routes/+page.server";
	import Button from "./Button.svelte";
	import Price from "./Price.svelte";
	import Card from "./card/Card.svelte";
  import {Rating} from 'flowbite-svelte';

  export let product: Product;
</script>

<Card class="mr-5 lg:mr-auto" image={product.images[0]} let:Body>
  <Body let:Action let:Title>
    <Title>{product.title}</Title>
    <div class="flex items-center">
      <Rating total={5} rating={product.rating}>
        <p slot="text" class="ml-2 font-medium">{product.rating}</p>
      </Rating>
    </div>
    <Action>
      <Price>{product.price}</Price>
      <Button rounded="lg">
        <div slot="icon" class="w-6 h-6">
          <MdAddShoppingCart />
        </div>
        ADD TO CART
      </Button>
    </Action>
  </Body>
</Card>