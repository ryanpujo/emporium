<script>
	import DarkModeSwitcher from "./DarkModeSwitcher.svelte";

  const menus = ["Profile", "Account", "Sign out"]
</script>

<div class="dropdown dropdown-end">
  <label tabindex="-1" for="" class="btn btn-circle btn-ghost avatar">
    <div class="w-10 rounded-full">
      <img src="/nika.png" alt="AV">
    </div>
  </label>
  <ul tabindex="-1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {#each menus as menu (menu)}
      <li><a href={`/${menu}`}>{menu}</a></li>
    {/each}
  </ul>
</div>