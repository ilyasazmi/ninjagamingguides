<script>
	let title = 'ninja gaming guides'

	const updateTitle = () => {
		title = 'SOMETHING COMPLETELY DIFFERENT'
	}
</script>

<div class="index">
	<h2>{title}</h2>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, porro iure.
		Eligendi voluptates deserunt doloremque minus numquam fugit quis voluptatem
		laudantium, voluptatum illum! Inventore deserunt laboriosam porro dolor hic,
		delectus, libero consequuntur animi laudantium deleniti exercitationem quo
		ipsam dolorem perspiciatis cum fugit dolorum harum ducimus eveniet itaque
		repellendus. Perspiciatis, error corporis obcaecati animi, quas voluptatum
		at molestias amet iusto cum consequatur nostrum distinctio nulla nobis
		pariatur aut voluptatibus, expedita dolorum id labore. Sit quis officiis
		ullam magni incidunt labore veritatis.
	</p>
	<a href="/guides">View Guides</a>
	<a href="/about">About</a>

	<button on:click={updateTitle}>change title</button>
	<input
		type="text"
		bind:value={title}
	/>
</div>
