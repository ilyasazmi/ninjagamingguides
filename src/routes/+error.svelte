<script>
	import { page } from '$app/stores'
</script>

<h1>{$page.status}: {$page.error.message}</h1>

<div class="error">
	<h2>madafaka</h2>
	<p>{$page.error.message}</p>
	<a href="/guides">View All Guides...</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
