import { writable } from "svelte-local-storage-store";
import type { ScheduleDay } from "../../types";

export const resetjadwal = {
    monday: [], friday: [], thursday: [], tuesday: [], wednesday: []
}

export const jadwal = writable<{
    monday: ScheduleDay[]
    tuesday: ScheduleDay[]
    wednesday: ScheduleDay[]
    thursday: ScheduleDay[]
    friday: ScheduleDay[]
}>('jadwal', resetjadwal)