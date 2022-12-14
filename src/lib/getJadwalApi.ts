import type { Day, IStandarResponse, ScheduleDay } from "../types";

export const dayInToEn = (day: string) => {
    day = day.toLowerCase()
    const days: { [i: string]: string } = {
        senin: 'monday',
        selasa: 'tuesday',
        rabu: 'wednesday',
        kamis: 'thursday',
        jumat: 'friday'
    }
    return days[day] || day
}

class GetJadwalApi {
    private headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    private base_endpoint = 'https://getjadwal.api.devcode.gethired.id'
    checkin = async (email: string) => {
        const resp = await fetch(`${this.base_endpoint}/checkin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ email })
        })
        const respjson: IStandarResponse<{
            id: number;
            email: string;
            updatedAt: string;
            createdAt: string;
        }> = await resp.json();
        return respjson
    }

    allSchedule = async (email: string) => {
        const [monday, tuesday, wednesday, thursday, friday] = await Promise.all([
            this.scheduleByDay(email, 'monday'),
            this.scheduleByDay(email, 'tuesday'),
            this.scheduleByDay(email, 'wednesday'),
            this.scheduleByDay(email, 'thursday'),
            this.scheduleByDay(email, 'friday'),
        ])

        return { monday, tuesday, wednesday, thursday, friday }
    }
    addSchedule = async (email: string, title: string, day: string) => {
        day = dayInToEn(day)
        const resp = await fetch(`${this.base_endpoint}/schedule?email=${email}`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({ title, day })
        })
        const respjson: IStandarResponse<ScheduleDay> = await resp.json()
        return respjson
    }

    scheduleByDay = async (email: string, day: string) => {
        day = dayInToEn(day)
        const resp = await fetch(`${this.base_endpoint}/schedule?email=${email}&day=${day}`)
        const respjson: IStandarResponse<ScheduleDay[]> = await resp.json()
        return respjson.data
    }
    updateSchedule = async (email: string, id: number, newTitle: string) => {
        await fetch(`${this.base_endpoint}/schedule?email=${email}&id=${id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({ title: newTitle })
        })
    }
    removeSchedule = async (email: string, id: number) => {
        await fetch(`${this.base_endpoint}/schedule?email=${email}&id=${id}`, {
            method: "DELETE",
        })
    }
}

const getJadwalApi = new GetJadwalApi()
export default getJadwalApi