<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import ModalWrapper from './ModalWrapper.svelte';
	import { closeModal } from 'svelte-modals';
	import getJadwalApi, { dayInToEn } from '../../getJadwalApi';
	import { emailLogged } from '../../store/preferences';
	import { jadwal } from '../../store/jadwal';
	import type { Day } from '../../../types';
	// provided by Modals
	export let isOpen = false;

	let matkul = '';
	let hari: string;

	const onSubmit = async () => {
		if (matkul && hari) {
			let day = dayInToEn(hari) as Day;
			const resp = await getJadwalApi.addSchedule($emailLogged, matkul, day);
			if (resp.status === 'Success') {
				getJadwalApi.scheduleByDay($emailLogged, day).then((resp) => {
					$jadwal[day] = resp;
				});
				closeModal();
			}
		}
	};
</script>

<ModalWrapper {isOpen} title="Buat Jadwal Kuliah">
	<!-- Content -->
	<form slot="content" class="flex flex-col gap-[23px]" on:submit|preventDefault={onSubmit}>
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
		<div>
			<label for="hari" class="font-medium mb-[6px]">Pilih Hari</label>
			<select
				bind:value={hari}
				data-cy="form-day"
				id="hari"
				type="text"
				class="w-full py-[12px] px-[15px] border bg-white"
				placeholder="Masukkan Mata Kuliah"
			>
				<option selected disabled value="">Pilih Hari</option>
				{#each ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'] as item}
					<option value={item}>{item}</option>
				{/each}
			</select>
		</div>
	</form>
	<!-- Footer -->
	<div class="flex justify-end" slot="footer">
		<button
			data-cy="btn-submit"
			on:click={onSubmit}
			class="py-[13px] px-[24px] rounded-full bg-[#D9019C] text-white font-medium disabled:opacity-50"
			disabled={!matkul || !hari}>Simpan</button
		>
	</div>
</ModalWrapper>
