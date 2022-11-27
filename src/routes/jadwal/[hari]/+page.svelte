<script>
	import { page } from '$app/stores';
	import TodoEmptyState from '../../../lib/assets/todo-empty-state.svg';
	import CardItemDelete from '../../../lib/assets/card-item-delete.svg';
	import CardItemEdit from '../../../lib/assets/card-item-edit.svg';

	import { openModal } from 'svelte-modals';
	import TambahMataKuliah from '$lib/components/Modal/TambahMataKuliah.svelte';
	import EditMataKuliah from '$lib/components/Modal/EditMataKuliah.svelte';
	import HapusMataKuliah from '$lib/components/Modal/HapusMataKuliah.svelte';
	let hari = $page.params.hari;

	let matkul = ['Statistika', 'Web Programming'];
	const tambahMatkul = () => openModal(TambahMataKuliah);
	const editMatkul = () => openModal(EditMataKuliah);
	const hapusMatkul = () => openModal(HapusMataKuliah);
</script>

<main>
	<div class="flex justify-between border-b-2 border-gray-400 items-center pb-[30px]">
		<div>
			<a href="/jadwal" class="text-3xl font-semibold" data-cy="btn-back">{'<'} </a>
			<span class="text-3xl font-semibold" data-cy="detail-title">{hari}</span>
		</div>
		<button
			type="button"
			on:click={tambahMatkul}
			class="bg-[#D9019C] text-white py-[13px] px-[24px] font-semibold rounded-full"
			data-cy="btn-create-schedule">+ Tambah Mata Kuliah</button
		>
	</div>

	<div class="mt-[45px]">
		<div class="flex flex-col gap-[10px]">
			{#each matkul as item}
				<div
					class="flex items-center justify-between py-[25px] px-[32px] rounded-lg bg-white"
					data-cy="card-item"
				>
					<h3 data-cy="card-item-title">{item}</h3>
					<div class="flex gap-[20px]">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span class="cursor-pointer" data-cy="card-item-edit" on:click={editMatkul}>
							<CardItemEdit />
						</span>
						<span class="cursor-pointer" data-cy="card-item-delete" on:click={hapusMatkul}>
							<CardItemDelete />
						</span>
					</div>
				</div>
			{:else}
				<div data-cy="todo-empty-state">
					<TodoEmptyState class="mx-auto" />
				</div>
			{/each}
		</div>
	</div>
</main>
