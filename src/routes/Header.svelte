<script lang="ts">
	import {nanoid} from 'nanoid';
	import DropdownMenu from './DropdownMenu.svelte';
	import 'iconify-icon';
	import NavList from './NavList.svelte';
	
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
						<label for="my-drawer" class="btn btn-square drawer-button btn-ghost">
							<iconify-icon icon="ic:baseline-menu"  />
						</label>
					</div>
					<div class="md:navbar-start navbar-center">
						<h1 class="">RProjects</h1>
					</div>
					<div class="navbar-center hidden md:inline-block">
						<ul class="menu menu-horizontal">
							<NavList {navs} />
						</ul>
					</div>
					<div class="navbar-end">
						<DropdownMenu/>
					</div>
				</div>
			</div>
			<div class="drawer-side">
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