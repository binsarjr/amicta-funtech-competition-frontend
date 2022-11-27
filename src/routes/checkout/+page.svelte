<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { emailLogged, logged } from '$lib/store/preferences';

	$: if (browser) {
		$logged = false;
		$emailLogged = '';
		goto('/');
	}
</script>
