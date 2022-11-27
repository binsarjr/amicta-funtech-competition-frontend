<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	
	import { Toaster } from 'svelte-french-toast';
</script>

<Header />
<slot />
<Toaster />
