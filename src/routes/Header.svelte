<script lang="ts">
	import {nanoid} from 'nanoid';
	import DropdownMenu from './DropdownMenu.svelte';
	import MdMenu from 'svelte-icons/md/MdMenu.svelte'
	import NavList from './NavList.svelte';
	import Notification from './Notification.svelte';
	import Cart from './Cart.svelte';
	
	const navs: Nav[] = [
		{
			id: nanoid(5),
			nav: "Home",
			route: "/"
		},
		{
			id: nanoid(5),
			nav: "Catalog",
			route: "/catalog"
		},
		{
			id: nanoid(5),
			nav: "About Us",
			route: "/aboutus"
		}
	];
</script>
<script context="module" lang="ts">
	export type Nav = {
		id: string
		nav: string,
		route: string
	};
</script>
<header>

	<nav>
		<div class="drawer">
			<input id="my-drawer" type="checkbox" class="drawer-toggle" /> 
			<div class="drawer-content flex">
				<div class="navbar bg-blue-600">
					<div class="navbar-start md:hidden">
						<label for="my-drawer" class="btn btn-square drawer-button btn-ghost w-10 h-10 mr-4">
							<MdMenu  />
						</label>
						<Cart class="md:hidden" />
					</div>
					<div class="md:navbar-start">
						<h1 class="">RProjects</h1>
					</div>
					<div class="navbar-center hidden md:inline-block">
						<ul class="menu menu-horizontal">
							<NavList {navs} />
						</ul>
					</div>
					<div class="navbar-end">
						<Cart class="hidden md:flex" />
						<Notification />
						<DropdownMenu/>
					</div>
				</div>
			</div>
			<div class="drawer-side z-10">
				<label for="my-drawer" class="drawer-overlay"></label>
				<ul class="menu p-4 w-80 h-full bg-base-200">
					<div class="flex justify-center">
						<h4>RProjects</h4>
					</div>
					<div class="divider"></div>
					<NavList {navs}/>
				</ul>
			</div>
		</div>
	</nav>
</header>