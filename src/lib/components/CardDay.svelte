<script lang="ts">
	import type { ScheduleDay } from '../../types';
	import CardDayContent from './CardDayContent.svelte';

	export let title: string;
	export let jadwalMatkul: ScheduleDay[] = [];
	$: matkul = jadwalMatkul.map((j) => j.title);
	let desc: string;
	$: {
		if (jadwalMatkul.length) {
			desc = `${jadwalMatkul.length} Mata Kuliah`;
		} else {
			desc = 'Belum ada mata kuliah';
		}
	}
</script>

<div>
	<a href="/jadwal/{title}" class="flex flex-col gap-[16px]">
		<div class="bg-white rounded-lg py-[20px] px-[22px] shadow-lg block w-full" data-cy="card-day">
			<h2 class="text-xl font-semibold mb-[6px]" data-cy="card-title-{title}">{title}</h2>
			<p
				class:ada={jadwalMatkul.length}
				class:tidakadak={!jadwalMatkul.length}
				data-cy="card-desc-{title}"
			>
				{@html desc}
			</p>
		</div>
		<CardDayContent {matkul} {title} />
	</a>
</div>

<style>
	.ada {
		@apply text-[#D9019C] text-[12px];
	}
	.tidakadak {
		@apply text-gray-500 text-[12px];
	}
</style>
