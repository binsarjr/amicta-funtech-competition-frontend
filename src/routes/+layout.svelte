<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { Modals, closeModal } from 'svelte-modals';
	import { fade } from 'svelte/transition';
</script>

<Modals>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div slot="backdrop" class="backdrop" on:click={closeModal} transition:fade />
</Modals>
<Header />
<slot />

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
