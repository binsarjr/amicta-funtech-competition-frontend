<script lang="ts">
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
	let dayFocus = false;

	const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
	$: filteredDay = days.filter((day) => {
		if (!hari) return true;
		return day.toLowerCase().includes(hari.toLowerCase());
	});

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

<ModalWrapper {isOpen} title="Buat Jadwal Kuliah" dataCy="form-add" {onSubmit}>
	<!-- Content -->
	<div slot="content" class="flex flex-col gap-[23px]">
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
			<label for="hari-asdasd" class="font-medium mb-[6px]">Pilih Hari</label>
			<div class="relative">
				<input
					type="text"
					bind:value={hari}
					id="hari-asdasd"
					data-cy="form-day"
					class="w-full py-[12px] px-[15px] border outline-1 outline-[#D9019C]"
					placeholder="Pilih Hari"
					on:focusin={() => (dayFocus = true)}
					on:input={() => (dayFocus = true)}
					on:focusout={() => setTimeout(() => (dayFocus = false), 500)}
				/>
				{#if dayFocus}
					<ul class="bg-white w-full absolute mt-2 rounded border" style="z-index: 2;">
						{#each filteredDay as item}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<li
								class="w-full py-[12px] px-[15px] hover:bg-[#D9019C] hover:bg-opacity-25 cursor-pointer"
								class:bg-[#D9019C]={item == hari}
								class:bg-opacity-25={item == hari}
								on:click={() => {
									hari = item;
									dayFocus = false;
								}}
							>
								{item}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
			<!-- <select
				bind:value={hari}
				data-cy="form-day"
				id="hari"
				type="text"
				class="w-full py-[12px] px-[15px] border bg-white"
				placeholder="Masukkan Mata Kuliah"
			>
				<option selected disabled value="">Pilih Hari</option>
				{#each ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'] as item}
					<option value={dayInToEn(item)}>{item}</option>
				{/each}
			</select> -->
		</div>
	</div>
	<!-- Footer -->
	<div class="flex justify-end" slot="footer">
		<button
			data-cy="btn-submit"
			class="py-[13px] px-[24px] rounded-full bg-[#D9019C] text-white font-medium disabled:opacity-50"
			disabled={!matkul || !hari}>Simpan</button
		>
	</div>
</ModalWrapper>
