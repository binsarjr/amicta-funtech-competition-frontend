import { writable } from 'svelte/store'

export const logged = writable(false)
export const emailLogged = writable('')