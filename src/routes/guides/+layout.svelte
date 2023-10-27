<script>
	import Title from '$lib/title.svelte'
	import '$lib/styles/global.css'
</script>

<header>
	<nav>
		<Title title="ninja gaming guides coming from guides +layout.svelte" />
		<div class="links">
			<a href="/">home</a>
			<a href="/about">about</a>
			<a href="/guides">guides</a>
		</div>
	</nav>
</header>

<main>
	<!-- page content -->
	<slot />
</main>

<footer>
	<p>copyright 2023 ninja gaming guides</p>
</footer>

<style>
	header {
		text-align: center;
		background: rgba(0, 0, 0, 0.1);
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	/* footer {
		text-align: center;
	} */
	.links {
		margin-left: auto;
	}
	a {
		margin-left: 10px;
	}
	nav {
		display: flex;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}
</style>
