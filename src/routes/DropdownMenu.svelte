<script>
	import { nanoid } from "nanoid";
	import AuthModal from "./AuthModal.svelte";
  import authStore from "$lib/stores/authStore";
	import { getFirebaseAuth } from "$lib/config/firebase_config";

  const menus = [
    {
      id: nanoid(5),
      name: "Profile",
      path: "/profile",
    }, 
    {
      id: nanoid(5),
      name: "Account",
      path: "/account",
    },
  ]
  let formModal = false;
  const auth = getFirebaseAuth();
</script>

<div class="dropdown dropdown-end">
  <label tabindex="-1" for="" class="btn btn-circle btn-ghost avatar">
    <div class="w-10 rounded-full">
      <img src="/nika.png" alt="AV">
    </div>
  </label>
  <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {#each menus as menu (menu.id)}
      <li><a href={menu.path}>{menu.name}</a></li>
    {/each}
    <div class="divider"></div>
    <li><button class:hidden={$authStore.isLoggedIn} class="btn btn-primary btn-sm" on:click|preventDefault={() => formModal = !formModal}>Sign in</button></li>
    <li><button on:click={() => auth.signOut()} class:hidden={!$authStore.isLoggedIn} class="btn btn-neutral btn-sm">Sign out</button></li>
  </ul>
</div>
<AuthModal bind:formModal={formModal} />