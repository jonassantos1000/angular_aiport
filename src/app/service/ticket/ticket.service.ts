import { Ticket } from './../../model/ticket.model';
import { Observable, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compraTicket } from 'src/app/model/compraTicket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
private url="http://127.0.0.1:8080/ticket"

constructor(private httpClient:HttpClient) { }

  get ticket(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.url);
  }

  comprarTicket(ticket: compraTicket){
    return this.httpClient.post(this.url,ticket).pipe(take(1));
  }

  delete(id:Number | string){
    return this.httpClient.delete(this.url+`/${id}`);
  }
}
