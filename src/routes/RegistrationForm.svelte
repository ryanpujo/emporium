<script lang="ts">
import { Label, Checkbox, Button, Input } from "flowbite-svelte";
import { createEventDispatcher } from "svelte";

export let errMessage: string | null;
const dispatch = createEventDispatcher();
let email: string;
let password: string;
function dispatchSignup() {
  dispatch('signup', {
    email,
    password
  });
}

</script>

{#if errMessage}
<div class="alert alert-error mt-4">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>{errMessage}</span>
</div>
{/if}
<form class="flex flex-col space-y-6" action="#">
  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h3>
  <Label class="space-y-2">
    <span>Email</span>
    <Input type="email" bind:value={email} name="email" placeholder="name@company.com" required />
  </Label>
  <Label class="space-y-2">
    <span>Your password</span>
    <Input type="password" bind:value={password} name="password" placeholder="•••••" required />
  </Label>
  <Button disabled={!email || !password} type="submit" on:click={dispatchSignup} class="w-full btn-primary">Create your account</Button>
</form>