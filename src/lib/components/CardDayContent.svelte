<script lang="ts">
	export let matkul: string[] = [];
	export let title: string;
</script>

{#if matkul.length}
	<div>
		<main class="flex flex-col gap-[6px] bg-white rounded-lg p-[10px] shadow-lg">
			{#each matkul as item}
				<div class="bg-gray-100 p-[16px] text-[16px] rounded-lg" data-cy="{title}-{item}">
					{item}
				</div>
			{/each}
		</main>
	</div>
{:else}
	<div />
{/if}
