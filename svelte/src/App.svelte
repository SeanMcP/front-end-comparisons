<script>
	export let name 
	import Emoji from 'svelte-emoji'
	let count = 0
</script>

<main class="svelte-container">
	<h1><Emoji symbol="👋" />{' '}Hello {name || 'beautiful'}!</h1>
	<p>I am a <b>Svelte app</b> created with <code>svelte/template</code></p>
	<button on:click={() => count++}>
		<Emoji symbol="👍"/>{' '}
		<b>Like count: {count}</b>
	</button>
</main>