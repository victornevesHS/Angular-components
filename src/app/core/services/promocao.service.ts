import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl

  constructor(
    private httpClient: HttpClient
  ) { }

  listar (): Observable<PromocaoService[]> {
    return this.httpClient.get<PromocaoService[]>(`${this.apiUrl}/promocoes`)

  }
}
