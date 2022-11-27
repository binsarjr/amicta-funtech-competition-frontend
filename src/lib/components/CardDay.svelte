<script lang="ts">
	export let title: string;
	export let totalMatkul = 0;
</script>

<a
	href="/jadwal/{title}"
	class="bg-white rounded-lg py-[20px] px-[22px] shadow-lg"
	data-cy="card-day"
>
	<h2 class="text-xl font-semibold mb-[6px]" data-cy="card-title-{title}">{title}</h2>
	<div data-cy="card-desc-{title}">
		{#if totalMatkul}
			<p class="text-[#D9019C] text-[12px]">{totalMatkul} Mata Kuliah</p>
		{:else}
			<p class="text-gray-500 text-[12px]">Belum ada mata kuliah</p>
		{/if}
	</div>
</a>
