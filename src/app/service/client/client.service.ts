import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from 'src/app/model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url = "http://127.0.0.1:8080/client";
  constructor(private httpClient: HttpClient) { }

  get clientes(): Observable<client[]> {
    return this.httpClient.get<client[]>(this.url);
  }

  getById(id:string | number): Observable<client>{
    return this.httpClient.get<client>(this.url.concat(`/${id}`));
  }

  post(client: client){
    return this.httpClient.post(this.url, client);
  }

  put(client: client, id: string | number){
    return this.httpClient.put(this.url+`/${id}`, client);
  }

  delete(id:string | number){
    return this.httpClient.delete(this.url+"/"+id);
  }
}
