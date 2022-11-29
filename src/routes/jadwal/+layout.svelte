<script>
	import { goto } from '$app/navigation';
	import { logged } from '$lib/store/preferences';
	import { Modals, closeModal } from 'svelte-modals';
	if (!$logged) goto('/');
</script>

<main class="w-3/4 mx-auto my-[57px]">
	<slot />
</main>

<Modals />
