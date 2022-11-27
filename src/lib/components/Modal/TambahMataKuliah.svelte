<script lang="ts">
	import ModalWrapper from './ModalWrapper.svelte';
	import { closeModal } from 'svelte-modals';
	// provided by Modals
	export let isOpen = false;

	let matkul = '';

	const onSubmit = () => {
		closeModal();
	};
</script>

<ModalWrapper {isOpen} title="Tambah Mata Kuliah">
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
	</form>
	<!-- Footer -->
	<div class="flex justify-end" slot="footer">
		<button
			data-cy="btn-submit"
			on:click={onSubmit}
			class="py-[13px] px-[24px] rounded-full bg-[#D9019C] text-white font-medium disabled:opacity-50"
			disabled={!matkul}>Simpan</button
		>
	</div>
</ModalWrapper>
