import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/model/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private url = "http://localhost:8080/flight"
  constructor(private httpClient:HttpClient) { }

  get flight():Observable<Flight[]> {
    return this.httpClient.get<Flight[]>(this.url);
  }

  flightById(id: number):Observable<Flight> {
    return this.httpClient.get<Flight>(this.url+"/"+id);
  }
}
