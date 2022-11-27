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
		<CardDay title="Senin" totalMatkul={jadwalMatkul.senin.length} />
		<CardDay title="Selasa" totalMatkul={jadwalMatkul.selasa.length} />
		<CardDay title="Rabu" totalMatkul={jadwalMatkul.rabu.length} />
		<CardDay title="Kamis" totalMatkul={jadwalMatkul.kamis.length} />
		<CardDay title="Jumat" totalMatkul={jadwalMatkul.jumat.length} />
	</div>
	<div class="grid grid-cols-5 gap-[16px] mt-[24px]">
		<CardDayContent matkul={jadwalMatkul.senin} />
		<CardDayContent matkul={jadwalMatkul.selasa} />
		<CardDayContent matkul={jadwalMatkul.rabu} />
		<CardDayContent matkul={jadwalMatkul.kamis} />
		<CardDayContent matkul={jadwalMatkul.jumat} />
	</div>
</main>
