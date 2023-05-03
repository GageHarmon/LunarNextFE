import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTicketStore } from '../../../store/ticketdata';

interface TicketsProps {
    currUser: any;
}

const Tickets: React.FC = ({ currUser }: TicketsProps) => {
    
    // ++++ ZUSTAND STATE ++++
    const tickets = useTicketStore((state) => state.tickets);
    const fetchAndSetTickets = useTicketStore((state) => state.fetchAndSetTickets);
    
    // ++++  FETCH FROM API FOLDER ++++
    useEffect(() => {
      fetchAndSetTickets();
    }, [fetchAndSetTickets]);

    if (!currUser) {
        return <div className="text-dblue">Please login to continue... </div>;
      }

    const assignTicket = async (ticketId) => {
    try {
        const response = await fetch(`/api/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: currUser.id }),
        });
    
        if (response.ok) {

        fetchAndSetTickets(); // Refresh the tickets list after assigning
        } else {
        console.error('Failed to assign ticket');
        }
    } catch (error) {
        console.error('Error:', error);
    }
    };
      
    
  return (
    <div>
    <div className="relative overflow-x-auto sm:rounded-lg " style={{ maxHeight: "50vh", overflowY: "auto" }}>
        <div className="max-h-1/2-screen overflow-y-auto">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-navpurp border-b border-blue-400 dark:text-white">
                <tr>
                    {/* ++++++ CHECK BOXES ++++++ */}
                    {/* <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                        </div>
                    </th> */}
                    {/* +++++ TABLE COLUMNS ++++++ */}
                    <th scope="col" className="px-6 py-3">Ticket #</th>
                    <th scope="col" className="px-6 py-3">Title</th>
                    <th scope="col" className="px-6 py-3">Category</th>
                    <th scope="col" className="px-6 py-3">Priority</th>
                    <th scope="col" className="px-6 py-3">Status</th>
                    <th scope="col" className="px-6 py-3">Assign</th>
                    <th scope="col" className="px-6 py-3">Entered</th>
                </tr>
            </thead>
            <tbody>
                    {/* ++++++ MAP TICKET DATA ++++++ */}
                {tickets.map((ticket, index: number) => (
                <tr key={index} className="bg-lightpurp border-b border-blue-400 hover:bg-navpurp">

                    {/* ++++++ MORE CHECK BOXES YES ++++++ */}
                    {/* <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                    </td> */}
                {/* +++++ TABLE DATA WITH CLICKABLE ID +++++ */}
                    <td className="px-6 py-4">
                        <Link as={`/tickets/${ticket.id}`} href="/tickets/[id]">
                            <button className="text-dpurp hover:text-blue-800 cursor-pointer">#{ticket.id}</button>
                        </Link>
                    </td>
                    <td className="px-6 py-4">{ticket.title}</td>
                    <td className="px-6 py-4">{ticket.category}</td>
                    <td className="px-6 py-4">{ticket.priority}</td>
                    <td className="px-6 py-4">{ticket.status}</td>
                    <td className="px-6 py-4">
                        <button
                            className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            onClick={() => assignTicket(ticket.id)}>
                        Assign
                        </button>
                    </td>
                    <td className="px-6 py-4">{new Date(ticket.created_at).toLocaleDateString()}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
        <div className="mb-4 mt-4 flex">
            {/* ++++++ CREATE TICKET BUTTON ++++++ */}
            <div className="mr-4">
                <Link href="/tickets/CreateTicket">
                <button className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Create Ticket
                </button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Tickets;