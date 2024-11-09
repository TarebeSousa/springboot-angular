import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // URL da API
  private url: string = 'http://localhost:8080';

  // Construtor
  constructor(private http: HttpClient) {}

  // Método para selecionar todos os clientes
  selecionar(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url);
  }

  // Método para cadastrar um cliente
  cadastrar(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url, client);
  }

  // Método para editar um cliente
  editar(client: Client): Observable<Client> {
    return this.http.put<Client>(this.url, client);
  }

  // Método para remover um cliente
  remover(codigo: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${codigo}`);
  }
}