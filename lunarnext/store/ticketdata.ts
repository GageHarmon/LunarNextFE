// src/store.ts
import { create } from 'zustand';
import { fetchTickets, fetchTicketById, Ticket } from '../src/pages/api/ticketapi';


type TicketState = {
  tickets: Ticket[];
  fetchAndSetTickets: () => Promise<void>;
  fetchAndSetUserTickets: (userId: number) => Promise<void>;
  getTicketById: (id: number) => Promise<Ticket>;
};

export const useTicketStore = create<TicketState>((set, get) => ({
  tickets: [],
  fetchAndSetTickets: async () => {
    const data = await fetchTickets();
    set({ tickets: data });
  },
  fetchAndSetUserTickets: async (userId: number) => {
    const allTickets = await fetchTickets();
    const userTickets = allTickets.filter((ticket) => ticket.user_id === userId);
    set({ tickets: userTickets });
  },
  getTicketById: async (id: number) => {
    const data = await fetchTicketById(id);
    return data;
  }
}));
