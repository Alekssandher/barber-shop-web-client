import { Injectable } from '@angular/core';
import { IScheduleService } from './ischedules.service';
import { map, Observable } from 'rxjs';
import { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentMonthResponse } from './schedule.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService implements IScheduleService {

  private readonly basePath = environment.apiUrl;

  constructor(private http: HttpClient) { }

  save(request: SaveScheduleRequest): Observable<SaveScheduleResponse> {
    return this.http.post<{ data: SaveScheduleResponse }>(`${this.basePath}schedule`, request)
      .pipe(map(response => response.data)); 
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}schedule/${id}`);
  }

  listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse> {
    return this.http.get<{ data: ScheduleAppointmentMonthResponse }>(`${this.basePath}schedule/${year}/${month}`)
      .pipe(map(response => response.data));
  }
}
