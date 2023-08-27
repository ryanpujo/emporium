<script lang="ts">
  export let title: string;
  export let copyWrite: string;
  export let buttonText: string;
</script>

<div {...$$restProps}>
  <div class="hero-overlay bg-opacity-60"></div>
  <div class="hero-content text-white text-center">
    <div class="max-w-md">
      <h1 class="mb-5">{title}</h1>
      <p class="mb-5">{copyWrite}</p>
      <button class="btn btn-primary rounded-full">{buttonText}</button>
    </div>
  </div>
</div>