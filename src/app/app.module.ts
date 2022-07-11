import { TicketComponent } from './ticket/ticket/ticket.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightComponent } from './flight/flight/flight.component';
import { AppRoutingModule } from './app-routing.module';
import localeBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ComprarTicketComponent } from './ticket/ticket/comprarTicket/comprarTicket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NovoClientComponent } from './client/client/novoClient/novoCLient/novoClient/novoClient.component';
import { AlterarClientComponent } from './client/client/alterarClient/alterarClient/alterarClient.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { FormularioComponent } from './client/client/formulario/formulario/formulario.component';
import { FormularioFlightComponent } from './flight/flight/formulario/formularioFlight/formularioFlight.component';
import { NovoFlightComponent } from './flight/flight/novoFlight/novoFlight/novoFlight.component';


registerLocaleData(localeBr, 'pt');
export const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    FlightComponent,
    TicketComponent,
    ComprarTicketComponent,
    HeaderComponent,
    FooterComponent,
    NovoClientComponent,
    AlterarClientComponent,
    FormularioComponent,
    NovoFlightComponent,
    FormularioFlightComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
