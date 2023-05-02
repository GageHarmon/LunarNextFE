
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Ticket } from '../api/ticketapi';

 
const TicketInfo: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
    const [tickets, setTickets] = useState<Ticket[]>([]);
  
    useEffect(() => {
      if (id) {
        fetch(`../api/tickets/${id}`)
          .then(response => response.json())
          .then(ticketData => setTicket(ticketData));
      }
    }, [id]);

    const deleteTicket = async (ticketId: number) => {
      const response = await fetch(`/api/tickets/${ticketId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const newTickets = tickets.filter(ticket => ticket.id !== ticketId);
        setTickets(newTickets);
        router.push('/tickets');
      }
    }

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Details and updates for ticket #{ticket?.id}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Priority: {ticket?.priority}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Status: {ticket?.status}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Date Entered: {new Date(ticket?.created_at).toLocaleDateString()}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Description: {ticket?.description}</p>
      </div>
      <div className="mr-4">
        <button onClick={() => deleteTicket(ticket.id)} 
                className="bg-lightpurp hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Delete Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketInfo;