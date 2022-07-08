import { Ticket } from "./ticket.model";

export interface client {
  id: number | string;
  nome: string;
  cpf: string;
  logradouro: string;
  telefone: string;
  email: string;
  ticket: Ticket[];
}
