import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpService) { }

  public listar(){
    return this.http.doGet<Client[]>('https://jsonplaceholder.typicode.com/users', this.http.optsName('Consultar clientes'));
  }
}
