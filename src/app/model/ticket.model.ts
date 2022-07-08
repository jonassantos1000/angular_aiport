import { client } from "./client.model";
import { Flight } from "./flight.model";

export interface Ticket {
  id: number;
  flight: Flight;
  client: client;
  dataCompra: string;
}
