<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import { closeModal } from 'svelte-modals';
	import { page } from '$app/stores';
	import getJadwalApi, { dayInToEn } from '../../getJadwalApi';
	import { emailLogged } from '../../store/preferences';
	import { jadwal } from '../../store/jadwal';
	import type { Day } from '../../../types';
	// provided by Modals
	export let isOpen = false;

	let matkul = '';

	const onSubmit = async () => {
		let day = dayInToEn($page.params.hari) as Day;
		const resp = await getJadwalApi.addSchedule($emailLogged, matkul, day);
		if (resp.status === 'Success') {
			getJadwalApi.scheduleByDay($emailLogged, day).then((resp) => {
				$jadwal[day] = resp;
			});
			closeModal();
		}
	};
</script>

<ModalWrapper {isOpen} title="Tambah Mata Kuliah" dataCy="detail-form" {onSubmit}>
	<!-- Content -->
	<form slot="content" class="flex flex-col gap-[23px]">
		<div>
			<label for="matakuliah" class="font-medium mb-[6px]">Mata Kuliah</label>
			<input
				id="matakuliah"
				bind:value={matkul}
				data-cy="form-matkul"
				type="text"
				class="w-full py-[12px] px-[15px] border outline-1 outline-[#D9019C]"
				placeholder="Masukkan Mata Kuliah"
			/>
		</div>
	</form>
	<!-- Footer -->
	<div class="flex justify-end" slot="footer">
		<button
			data-cy="btn-submit"
			class="py-[13px] px-[24px] rounded-full bg-[#D9019C] text-white font-medium disabled:opacity-50"
			disabled={!matkul}>Simpan</button
		>
	</div>
</ModalWrapper>
