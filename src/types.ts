export interface IStandarResponse<Data> {
    status: "Success"
    message: "Success"
    data: Data
}


export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'


export interface ScheduleDay {
    id: number;
    user_id: string;
    title: string;
    day: Day;
    createdAt: string;
    updatedAt: string;
}