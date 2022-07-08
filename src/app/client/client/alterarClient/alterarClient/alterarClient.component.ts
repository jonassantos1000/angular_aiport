import { client } from './../../../../model/client.model';
import { Router, Routes, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client/client.service';

@Component({
  selector: 'app-alterarClient',
  templateUrl: './alterarClient.component.html',
  styleUrls: ['./alterarClient.component.css']
})
export class AlterarClientComponent implements OnInit {
  id!: number;
  cliente: client={} as client;

  constructor(private routes:ActivatedRoute, private service: ClientService) { }

  ngOnInit() {
    this.id=this.routes.snapshot.queryParams['id'];
    this.service.getById(this.id).subscribe((cliente) => this.cliente=cliente);
  }

}
