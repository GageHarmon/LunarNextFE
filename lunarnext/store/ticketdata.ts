// src/store.ts
import { create } from 'zustand';
import { fetchTickets, fetchTicketById, Ticket } from '../src/pages/api/ticketapi';

type TicketState = {
  tickets: Ticket[];
  fetchAndSetTickets: () => Promise<void>;
  getTicketById: (id: number) => Promise<Ticket>;
};

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],
  fetchAndSetTickets: async () => {
    const data = await fetchTickets();
    set({ tickets: data });
  },
  getTicketById: async (id: number) => {
    const data = await fetchTicketById(id);
    return data;
  }
}));
