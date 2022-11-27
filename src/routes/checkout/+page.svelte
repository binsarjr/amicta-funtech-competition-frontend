<script>
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { jadwal, resetjadwal } from '$lib/store/jadwal';
	import { emailLogged, logged } from '$lib/store/preferences';

	$: if (browser) {
		$logged = false;
		$emailLogged = '';
		$jadwal = resetjadwal;
		goto('/');
	}
</script>
