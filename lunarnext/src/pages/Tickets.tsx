import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTicketStore } from '../../store/ticketdata';

const Tickets: React.FC = () => {

    // ++++ ZUSTAND STATE ++++
  const tickets = useTicketStore((state) => state.tickets);
  const fetchAndSetTickets = useTicketStore((state) => state.fetchAndSetTickets);

    // ++++  FETCH FROM API FOLDER ++++
  useEffect(() => {
    fetchAndSetTickets();
  }, [fetchAndSetTickets]);
    
  return (
    <div>
    <div className="relative overflow-x-auto sm:rounded-lg " style={{ maxHeight: "50vh", overflowY: "auto" }}>
        <div className="max-h-1/2-screen overflow-y-auto">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
            <thead className="text-xs text-white uppercase bg-lightpurp border-b border-blue-400 dark:text-white">
                <tr>
                    {/* ++++++ CHECK BOXES ++++++ */}
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ticket #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Priority
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date Entered
                    </th>
                </tr>
            </thead>
            <tbody>
                    {/* ++++++ MAP TICKET DATA ++++++ */}
                {tickets.map((ticket, index: number) => (
                <tr key={index} className="bg-lightpurp border-b border-blue-400 hover:bg-blue-500">

                    {/* ++++++ MORE CHECK BOXES YES ++++++ */}
                    <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                    </td>
                    <td className="px-6 py-4">{ticket.id}</td>
                    <td className="px-6 py-4">{ticket.title}</td>
                    <td className="px-6 py-4">{ticket.category}</td>
                    <td className="px-6 py-4">{ticket.priority}</td>
                    <td className="px-6 py-4">{ticket.status}</td>
                    <td className="px-6 py-4">{new Date(ticket.created_at).toLocaleDateString()}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
    <div className="mb-4 mt-4">
        <Link href="/CreateTicket">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create Ticket
          </button>
        </Link>
    </div>
    </div>
  );
};

export default Tickets;