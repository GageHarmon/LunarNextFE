// src/store.ts
import create from 'zustand';
import { fetchTickets } from '../src/pages/api/ticketapi';

type Ticket = {
  id: number;
  title: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
};

type TicketState = {
  tickets: Ticket[];
  fetchAndSetTickets: () => Promise<void>;
};

export const useTicketStore = create<TicketState>((set) => ({
  tickets: [],
  fetchAndSetTickets: async () => {
    const data = await fetchTickets();
    set({ tickets: data });
  },
}));
