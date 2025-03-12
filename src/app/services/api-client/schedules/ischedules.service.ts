import { Observable } from "rxjs";
import { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentResponse } from "./schedule.models";

export interface IScheduleService {
    save(request: SaveScheduleRequest): Observable<SaveScheduleResponse>

    delete(id: number): Observable<void>

    listInMonth(year: number, month: number): Observable<ScheduleAppointmentResponse>
}