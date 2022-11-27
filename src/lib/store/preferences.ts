import { writable } from 'svelte-local-storage-store'

export const logged = writable('logged', false)
export const emailLogged = writable('emailLogged', '')