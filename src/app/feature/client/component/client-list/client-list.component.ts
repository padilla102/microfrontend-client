import { Component, OnInit } from '@angular/core';
import { Client } from '@client/shared/model/client';
import { ClientService } from '@client/shared/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public clients: Client[];
  displayedColumns: string[] = ['id', 'name', 'phone', 'email'];
  dataSource: Client[] = [];
  constructor(
    private clientService:ClientService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this.clientService.listar().subscribe(data =>{
      this.dataSource =data;
    });
  }
}
