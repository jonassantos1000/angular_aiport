import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/service/flight/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  flights: Flight[]=[];
  constructor(private service:FlightService) { }

  ngOnInit(): void {
    this.service.flight.subscribe((flight: Flight[])=>{
      this.flights=flight;
    })
  }

  delete(id: Number){
    this.service.delete(id).subscribe((flight)=>{
      alert('Voo apagado com sucesso !');
      this.flights= this.flights.filter(voo => voo.id != id);
    },
      error => alert(`Erro: ${error.error.mensagem}`)
    )
  }

}
