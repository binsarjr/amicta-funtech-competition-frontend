<script lang="ts">
	import { fly } from 'svelte/transition';
	import { closeModal } from 'svelte-modals';
	// provided by Modals
	export let isOpen = false;
	export let title: string;
	export let dataCy = 'form-add';
</script>

{#if isOpen}
	<div role="dialog" class="modal" data-cy={dataCy}>
		<div class="contents w-1/2">
			<div class="border-b-2 p-[16px] pb-[14px] flex justify-between items-center">
				<h1 class="text-xl font-semibold">{title}</h1>
				<button type="button" data-cy="close-modal" on:click={closeModal}>
					<svg
						width="15"
						height="14"
						viewBox="0 0 15 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.5 1L1.5 13"
							stroke="#A4A4A4"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M1.5 1L13.5 13"
							stroke="#A4A4A4"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</div>
			<div class="p-[16px] py-[24px]">
				<slot name="content" />
			</div>
			<div class="p-[16px] border-t-2  pt-[24px] ">
				<slot name="footer" />
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
