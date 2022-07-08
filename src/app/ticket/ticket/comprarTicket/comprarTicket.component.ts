import { client } from './../../../model/client.model';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket/ticket.service';
import { ClientService } from 'src/app/service/client/client.service';
import { FlightService } from 'src/app/service/flight/flight.service';
import { Flight } from 'src/app/model/flight.model';
import { compraTicket } from 'src/app/model/compraTicket';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comprarTicket',
  templateUrl: './comprarTicket.component.html',
  styleUrls: ['./comprarTicket.component.scss']
})
export class ComprarTicketComponent implements OnInit {

  constructor(private service: TicketService, private cliente: ClientService,
    private flight: FlightService, private route: ActivatedRoute, private router: Router) {

     }
  clientes: client[]=[];
  flights!: Flight;

  ticket: compraTicket={} as compraTicket;

  ChangeClient(e:any){
    const idCliente = e.target.value;
    this.ticket.idClient=Number(idCliente);
    console.log(this.ticket)
  }

  ngOnInit(): void {
    const id =this.route.snapshot.queryParams['id'];

    this.flight.flightById(id).subscribe((flight: Flight) => {
      this.flights=flight;
      this.ticket.idFlight=id;
    });
    console.log(this.ticket);
    this.cliente.clientes.subscribe((clientes: client[])=>{
      this.clientes=clientes;
    })
  }

  salvarCompra(){
    console.log("compra solicitada")
    this.ticket.dataCompra= "2022-06-11 11:30:20";
    this.service.comprarTicket(this.ticket).subscribe(sucess => console.log("sucesso"),
    error => console.error("falhou"), () => console.log("fluxo finalizado."));
    this.router.navigate(['passagem']);
  }
}
