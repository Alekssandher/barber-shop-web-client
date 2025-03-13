import { Injectable } from '@angular/core';
import { IClientService } from './iclients.service';
import { map, Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, ListClientResponse, DetailClientResponse, UpdateClientRequest, UpdateClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientService {

  private readonly basePath = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<{ data: SaveClientResponse }>(`${this.basePath}clients`, request)
      .pipe(map(response => response.data)); 
  }
  
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<{ data: UpdateClientResponse }>(`${this.basePath}clients/${id}`, request)
      .pipe(map(response => response.data));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/${id}`);
  }

  list(): Observable<ListClientResponse[]> {
    return this.http.get<{ data: ListClientResponse[] }>(`${this.basePath}clients`)
      .pipe(map(response => response.data));
  }

  findById(id: number): Observable<DetailClientResponse> {
    return this.http.get<{ data: DetailClientResponse }>(`${this.basePath}clients/${id}`)
      .pipe(map(response => response.data));
  }
}
