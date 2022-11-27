<script>
	import CardDay from '$lib/components/CardDay.svelte';
	import CardDayContent from '$lib/components/CardDayContent.svelte';
	import BuatJadwalKuliah from '$lib/components/Modal/BuatJadwalKuliah.svelte';
	import { openModal } from 'svelte-modals';
	// import { getContext } from 'svelte';
	let jadwalMatkul = {
		senin: ['Bahasa Inggris'],
		selasa: [],
		rabu: ['Bahasa Inggris', 'Web Programming', 'Data science'],
		kamis: [],
		jumat: []
	};

	// const { open } = getContext('simple-modal');
	const buatJadwal = () => openModal(BuatJadwalKuliah);
</script>

<main>
	<div class="flex justify-end">
		<button
			type="button"
			on:click={buatJadwal}
			class="bg-[#D9019C] text-white py-[13px] px-[24px] font-semibold rounded-full"
			data-cy="btn-create-schedule">+ Buat Jadwal Kuliah</button
		>
	</div>
	<div class="grid grid-cols-5 gap-[16px] mt-[45px]">
		<CardDay title="Senin" jadwalMatkul={jadwalMatkul.senin} />
		<CardDay title="Selasa" jadwalMatkul={jadwalMatkul.selasa} />
		<CardDay title="Rabu" jadwalMatkul={jadwalMatkul.rabu} />
		<CardDay title="Kamis" jadwalMatkul={jadwalMatkul.kamis} />
		<CardDay title="Jumat" jadwalMatkul={jadwalMatkul.jumat} />
	</div>
</main>
