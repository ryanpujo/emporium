<script lang="ts">
	import Button from "../lib/components/Button.svelte";

  export let title: string;
  export let copyWrite: string;
  export let buttonText: string = "Discover More";
  let clazz: string = "";
  export {clazz as class};
</script>

<div {...$$restProps} class={"hero " + clazz}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-white text-center">
    <div class="max-w-md">
      <h1 class="mb-5">{title}</h1>
      <p class="mb-5">{copyWrite}</p>
      <!-- <button class="btn btn-primary rounded-full">{buttonText}</button> -->
      <Button roundedFull>{buttonText}</Button>
    </div>
  </div>
</div>