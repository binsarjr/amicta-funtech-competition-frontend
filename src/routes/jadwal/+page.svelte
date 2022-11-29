<script lang="ts">
	import { browser } from '$app/environment';
	import CardDay from '$lib/components/CardDay.svelte';
	import BuatJadwalKuliah from '$lib/components/Modal/BuatJadwalKuliah.svelte';
	import getJadwalApi from '$lib/getJadwalApi';
	import { emailLogged } from '$lib/store/preferences';
	import { openModal } from 'svelte-modals';
	import { jadwal } from '../../lib/store/jadwal';

	let mounted = false;
	$: if (browser) {
		(async () => {
			$jadwal = await getJadwalApi.allSchedule($emailLogged);
			mounted = true;
		})();
	}

	const buatJadwal = () => openModal(BuatJadwalKuliah);
</script>

<svelte:head>
	<title>Jadwal</title>
</svelte:head>
<main>
	<div class="flex justify-end">
		<button
			type="button"
			on:click={buatJadwal}
			class="bg-[#D9019C] text-white py-[13px] px-[24px] font-semibold rounded-full"
			data-cy="btn-create-schedule">+ Buat Jadwal Kuliah</button
		>
	</div>
	{#if mounted}
		<div class="grid md:grid-cols-3 lg:grid-cols-5 gap-[16px] mt-[45px]">
			<CardDay title="Senin" jadwalMatkul={$jadwal.monday} />
			<CardDay title="Selasa" jadwalMatkul={$jadwal.tuesday} />
			<CardDay title="Rabu" jadwalMatkul={$jadwal.wednesday} />
			<CardDay title="Kamis" jadwalMatkul={$jadwal.thursday} />
			<CardDay title="Jumat" jadwalMatkul={$jadwal.friday} />
		</div>
	{/if}
</main>
