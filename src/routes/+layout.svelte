<script>
	import Title from '$lib/title.svelte'
	import '$lib/styles/global.css'
</script>

<header>
	<Title title="ninja gaming guides coming from app root layout.svelte" />
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
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
