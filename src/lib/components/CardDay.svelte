<script lang="ts">
	import type { ScheduleDay } from '../../types';
	import CardDayContent from './CardDayContent.svelte';

	export let title: string;
	export let jadwalMatkul: ScheduleDay[] = [];
	$: matkul = jadwalMatkul.map((j) => j.title);
</script>

<div>
	<a href="/jadwal/{title}" class="flex flex-col gap-[16px]">
		<div class="bg-white rounded-lg py-[20px] px-[22px] shadow-lg block w-full" data-cy="card-day">
			<h2 class="text-xl font-semibold mb-[6px]" data-cy="card-title-{title}">{title}</h2>
			<div>
				{#if jadwalMatkul.length}
					<p class="text-[#D9019C] text-[12px]" data-cy="card-desc-{title}">{@html jadwalMatkul.length+ ' Mata Kuliah'}</p>
				{:else}
					<p class="text-gray-500 text-[12px]" data-cy="card-desc-{title}">Belum ada mata kuliahh</p>
				{/if}
			</div>
		</div>
		<CardDayContent {matkul} {title} />
	</a>
</div>
