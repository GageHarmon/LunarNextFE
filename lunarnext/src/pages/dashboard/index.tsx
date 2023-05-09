import { useEffect } from 'react';
import { useTicketStore } from '../../../store/ticketdata';
import Link from 'next/link';

interface DashboardProps {
  currUser: any;
}

export default function Dashboard({ currUser }: DashboardProps) {
  const tickets = useTicketStore((state) => state.tickets);
  const fetchAndSetUserTickets = useTicketStore((state) => state.fetchAndSetUserTickets);

  useEffect(() => {
    if (currUser) {
      fetchAndSetUserTickets(currUser.id);
    }
  }, [currUser, fetchAndSetUserTickets]);

  if (!currUser) {
    return <div className="text-dblue">Please login to continue... </div>;
  }

  return (
  <div className="mt-4">
    <h2 className="text-3xl font-bold text-navpurp fixed top-20">{currUser.username}&apos;s Dashboard</h2>
    <div className="mt-4">
      <h3 className="text-2xl font-semibold text-navpurp mb-2">Assigned Tickets</h3>
      <div className="relative overflow-x-auto sm:rounded-lg " style={{ maxHeight: "50vh", overflowY: "auto" }}>
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-navpurp border-b border-blue-400 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">Ticket #</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Priority</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Date Entered</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id} className=" text-navpurp bg-white border-b border-blue-400 hover:bg-navpurp hover:text-white">
                <td className="px-6 py-4">
                  <Link as={`/tickets/${ticket.id}`} href="/tickets/[id]">
                      <button className="hover:text-blue-800 cursor-pointer">#{ticket.id}</button>
                  </Link>
                </td>
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
    <div className="mr-4 mt-4">
      <Link href="/tickets/CreateTicket">
        <button className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Create Ticket
        </button>
      </Link>
    </div>
  </div>
  );
}
