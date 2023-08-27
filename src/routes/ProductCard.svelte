<script lang="ts">
  export let product: any;
</script>


  <div class="card card-compact w-96 bg-base-100 shadow-xl mb-5">
    <figure><img src={product.images[0]} alt="product"></figure>
    <div class="card-body">
      <h2 class="card-title">{product.title}</h2>
      <p>{product.description}</p>
      <p class="font-bold text-lg">${product.price}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>