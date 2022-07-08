import { TicketComponent } from './ticket/ticket/ticket.component';
import { ClientComponent } from './client/client/client.component';
import { FlightComponent } from './flight/flight/flight.component';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { Routes } from '@angular/router';
import { ComprarTicketComponent } from './ticket/ticket/comprarTicket/comprarTicket.component';
import { NovoClientComponent } from './client/client/novoClient/novoCLient/novoClient/novoClient.component';
import { AlterarClientComponent } from './client/client/alterarClient/alterarClient/alterarClient.component';
import { NovoFlightComponent } from './flight/flight/novoFlight/novoFlight/novoFlight.component';

export const routes: Routes = [
  {path: '', redirectTo:'voos', pathMatch: 'full'},
  {path: 'voos', component:FlightComponent},
  {path: 'cliente', component: ClientComponent},
  {path: 'passagem', component: TicketComponent},
  {path: 'comprarPassagem', component: ComprarTicketComponent},
  {path: 'novoCliente', component: NovoClientComponent},
  {path: 'alterarCliente', component: AlterarClientComponent},
  {path: 'novoVoo', component: NovoFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
