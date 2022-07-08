import { Router } from '@angular/router';
import { client } from './../../model/client.model';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  clientes: client[] =[];
  constructor(private service: ClientService, private router: Router) { }

    ngOnInit(): void {
      this.service.clientes.subscribe((clientes: client[]) =>{
        this.clientes = clientes;
      })
    }

  delete(id: string | number){
    this.service.delete(id).subscribe((cliente) =>{
      this.clientes = this.clientes.filter(cliente => cliente.id != id)},
      erro=> alert('Ocorreu um erro ao excluir cliente'));
  }
}
