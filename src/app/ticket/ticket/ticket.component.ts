import { Ticket } from './../../model/ticket.model';
import { Component, OnInit, DebugElement } from '@angular/core';
import { TicketService } from 'src/app/service/ticket/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tickets: Ticket[]=[];
  constructor(private service:TicketService) { }

  ngOnInit() {
    this.service.ticket.subscribe((tickets: Ticket[]) => {
      this.tickets=tickets;
    })
  }

  delete(id: number | string){
    this.service.delete(id).subscribe((cliente) => {
      this.tickets = this.tickets.filter(cliente => cliente.id !=id)},
      erro => alert('Ocorreu um erro ao excluir este cliente'));
  }
}
