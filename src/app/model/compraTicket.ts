import { client } from "./client.model";
import { Flight } from "./flight.model";

export interface compraTicket {
  idFlight: number | null;
  idClient: number | null;
  dataCompra: string | null;
}
