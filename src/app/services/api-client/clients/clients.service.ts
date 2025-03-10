import { Injectable } from '@angular/core';
import { IClientService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse, DetailClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientService {

  constructor(private http: HttpClient) { }

  save(request: SaveClientRequest): Observable<SaveClientResponse>;
  save(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>;
  save(id: unknown, request?: unknown): import("rxjs").Observable<import("./client.models").SaveClientResponse> | import("rxjs").Observable<import("./client.models").UpdateClientResponse> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<ListClientResponse[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Observable<DetailClientResponse> {
    throw new Error('Method not implemented.');
  }
}
