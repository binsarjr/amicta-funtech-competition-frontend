<script lang="ts">
	import { fly } from 'svelte/transition';
	import TrashSvg from '../../assets/todo-item-delete-button.svg';
	import { closeModal } from 'svelte-modals';
	// provided by Modals
	export let isOpen = false;
</script>

{#if isOpen}
	<div role="dialog" class="modal" transition:fly={{ y: 20 }} data-cy="form-add">
		<div class="contents p-[32px] text-center">
			<div class="flex items-center justify-center">
				<div class="bg-[#ED4C5C] rounded-full p-[20px]">
					<TrashSvg />
				</div>
			</div>
			<h3 class="text-xl font-semibold mt-[62px]">Hapus Mata Kuliah</h3>
			<p class="text-gray-500 mt-[5px]">Apakah anda yakin menghapus mata kuliah Statistika?</p>
			<div class="mt-[34px]">
				<div class="flex gap-[17px] justify-center items-center">
					<button
						on:click={closeModal}
						data-cy="btn-close"
						type="button"
						class="px-[34px] py-[12px] rounded-full font-medium text-gray-500 bg-gray-200"
						>Batal</button
					>
					<button
						on:click={closeModal}
						data-cy="btn-submit"
						type="button"
						class="px-[34px] py-[12px] rounded-full font-medium text-white bg-[#ED4C5C]"
						>Hapus</button
					>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		/* allow click-through to backdrop */
		pointer-events: none;
	}

	.contents {
		min-width: 240px;
		border-radius: 6px;
		background: white;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: auto;
	}
</style>
