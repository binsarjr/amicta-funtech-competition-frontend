<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import getJadwalApi from '../lib/getJadwalApi';
	import { jadwal } from '../lib/store/jadwal';
	import { emailLogged, logged } from '../lib/store/preferences';
	import { validateEmail } from '../lib/utils';
	if ($logged && $emailLogged) goto('jadwal');

	let email = '';
	let invalidEmail = false;
	$: if (email && browser) {
		invalidEmail = !validateEmail(email);
	}

	const onSubmit = async () => {
		if (validateEmail(email)) {
			const resp = await getJadwalApi.checkin(email);
			if (resp.status === 'Success') {
				$logged = true;
				$emailLogged = resp.data.email;
				goto('jadwal');
			}
		}
	};
</script>

<svelte:head>
	<title>Check In</title>
</svelte:head>

<main class="bg-white rounded-lg shadow-lg mx-auto w-[90vw] md:w-[491px] px-[65px] py-[48px] mt-[54px]">
	<div>
		<h1 class="font-semibold text-center text-xl" data-cy="text-login">Check In</h1>
		<form class="mt-[53px] w-full" on:submit|preventDefault={onSubmit}>
			<label for="email" class="font-medium block mb-[7px]">Email</label>
			<input
				data-cy="input-email"
				value={email}
				on:input={(e) => (email = e.target.value)}
				id="email"
				type="text"
				class="w-full py-[12px] px-[16px] rounded-lg border outline-none"
				class:bg-gray-100={!email}
				class:border-[#ED4C5C]={invalidEmail}
				placeholder="Masukkan email anda"
			/>
			{#if invalidEmail}
				<div class="flex gap-[8px] items-center mt-[7px]" data-cy="error-email">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8 0.125C10.0886 0.125 12.0916 0.954685 13.5685 2.43153C15.0453 3.90838 15.875 5.91142 15.875 8C15.875 10.0886 15.0453 12.0916 13.5685 13.5685C12.0916 15.0453 10.0886 15.875 8 15.875C5.91142 15.875 3.90838 15.0453 2.43153 13.5685C0.954685 12.0916 0.125 10.0886 0.125 8C0.125 5.91142 0.954685 3.90838 2.43153 2.43153C3.90838 0.954685 5.91142 0.125 8 0.125ZM8 3.5C7.85717 3.49988 7.71588 3.52955 7.58517 3.58711C7.45445 3.64467 7.33718 3.72887 7.24084 3.83431C7.14449 3.93976 7.0712 4.06414 7.02565 4.19951C6.98009 4.33488 6.96327 4.47826 6.97625 4.6205L7.38688 9.12725C7.40279 9.27877 7.47426 9.41903 7.58747 9.52097C7.70069 9.62292 7.84765 9.67933 8 9.67933C8.15235 9.67933 8.29931 9.62292 8.41253 9.52097C8.52575 9.41903 8.59721 9.27877 8.61312 9.12725L9.02262 4.6205C9.0356 4.47836 9.01881 4.33507 8.97332 4.19977C8.92783 4.06448 8.85464 3.94016 8.75842 3.83473C8.6622 3.7293 8.54506 3.64508 8.41448 3.58745C8.2839 3.52982 8.14274 3.50003 8 3.5ZM8 12.5C8.2387 12.5 8.46761 12.4052 8.6364 12.2364C8.80518 12.0676 8.9 11.8387 8.9 11.6C8.9 11.3613 8.80518 11.1324 8.6364 10.9636C8.46761 10.7948 8.2387 10.7 8 10.7C7.76131 10.7 7.53239 10.7948 7.3636 10.9636C7.19482 11.1324 7.1 11.3613 7.1 11.6C7.1 11.8387 7.19482 12.0676 7.3636 12.2364C7.53239 12.4052 7.76131 12.5 8 12.5Z"
							fill="#ED4C5C"
						/>
					</svg>

					<span class="text-red-500">Format email tidak sesuai</span>
				</div>
			{/if}
			<button
				data-cy="btn-login"
				class="py-[12px] px-[15px] rounded-full bg-[#D9019C] text-white w-full mt-[22px] disabled:opacity-50"
				disabled={invalidEmail || !email}>Mulai Sesi</button
			>
		</form>
	</div>
</main>
