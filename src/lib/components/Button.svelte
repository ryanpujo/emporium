<script lang="ts">
type ButtonVariant = "primary" | "secondary" | "info" | "accent" | "warning" | "error" | "success";
export let variant: ButtonVariant = "primary";
export let ghost = false;
export let link = false;
export let outline = false;
export let disabled = false;
export let roundedFull = false;
export let rounded: "" | "xl" | "lg" = "";

</script>

<button 
  class:btn-ghost={ghost}
  class:btn-link={link}
  class:btn-outline={outline}
  class:btn-disabled={disabled}
  class:btn-primary={variant === "primary"}
  class:btn-secondary={variant === "secondary"}
  class:btn-info={variant === "info"}
  class:btn-accent={variant === "accent"}
  class:btn-warning={variant === "warning"}
  class:btn-error={variant === "error"}
  class:btn-success={variant === "success"}
  class:rounded-full={roundedFull}
  class:rounded-xl={rounded === "xl"}
  class:rounded-lg={rounded === "lg"}
  class="btn"
  on:click
  {disabled}
>
  <slot name="icon" />
  <slot />
</button>