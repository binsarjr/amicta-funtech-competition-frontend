<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	import { Toaster } from 'svelte-french-toast';
</script>

<main data-sveltekit-preload-data>
	<Header />
	<slot />
	<Toaster />
</main>
