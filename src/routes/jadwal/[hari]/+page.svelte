<script lang="ts">
	import { page } from '$app/stores';
	import TodoEmptyState from '../../../lib/assets/todo-empty-state.svg';
	import CardItemDelete from '../../../lib/assets/card-item-delete.svg';
	import CardItemEdit from '../../../lib/assets/card-item-edit.svg';

	import { openModal } from 'svelte-modals';
	import TambahMataKuliah from '$lib/components/Modal/TambahMataKuliah.svelte';
	import EditMataKuliah from '$lib/components/Modal/EditMataKuliah.svelte';
	import HapusMataKuliah from '$lib/components/Modal/HapusMataKuliah.svelte';
	import getJadwalApi, { dayInToEn } from '../../../lib/getJadwalApi';
	import type { Day, ScheduleDay } from '../../../types';
	import { jadwal } from '../../../lib/store/jadwal';
	import { emailLogged } from '../../../lib/store/preferences';
	import { onMount } from 'svelte';
	let hari = $page.params.hari as string;
	let day = dayInToEn(hari) as Day;

	let matkul: ScheduleDay[] = [];
	$: matkul = $jadwal[day] || [];
	const tambahMatkul = () => openModal(TambahMataKuliah);
	const editMatkul = (id: number, matkul: string) => openModal(EditMataKuliah, { id, matkul });
	const hapusMatkul = (id: number) => openModal(HapusMataKuliah, { id });
	onMount(async () => {
		$jadwal[day] = await getJadwalApi.scheduleByDay($emailLogged, hari);
	});
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
					<h3 data-cy="card-item-title">{item.title}</h3>
					<div class="flex gap-[20px]">
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							class="cursor-pointer"
							data-cy="card-item-edit"
							on:click={() => editMatkul(item.id, item.title)}
						>
							<CardItemEdit />
						</span>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							class="cursor-pointer"
							data-cy="card-item-delete"
							on:click={() => hapusMatkul(item.id)}
						>
							<CardItemDelete />
						</span>
					</div>
				</div>
			{:else}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div data-cy="todo-empty-state" on:click={tambahMatkul} class="cursor-pointer">
					<TodoEmptyState class="mx-auto" />
				</div>
			{/each}
		</div>
	</div>
</main>
