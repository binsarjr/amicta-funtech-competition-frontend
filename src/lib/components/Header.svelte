<script>
	import { emailLogged, logged } from '$lib/store/preferences';
</script>

<main class="bg-[#3A0B48]">
	<div
		class="w-3/4 mx-auto text-white py-[32px] text-center flex justify-center items-center flex-wrap gap-5"
		class:justify-between={$logged}
	>
		<a href="/jadwal" class="font-bold text-2xl" data-cy="header-title">GetJadwal</a>
		{#if $logged}
			<a
				href="/checkout"
				data-cy="btn-logout"
				class="text-white bg-[#D9019C] font-bold py-[10px] px-[16px] rounded ml-auto"
				>Check out | {$emailLogged}</a
			>
		{/if}
	</div>
</main>
