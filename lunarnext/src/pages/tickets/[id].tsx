
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Ticket } from '../api/ticketapi';
import { FiTrash } from 'react-icons/fi';

 
interface TicketInfoProps {
  currUser: any; // Replace 'any' with the appropriate type for your user object
  loggedIn: boolean;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ currUser, loggedIn }) => {
    const router = useRouter();
    const { id } = router.query;
    const [comment, setComment] = useState<string>('');
    const [comments, setComments] = useState<any[]>([]);
    const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
    const [tickets, setTickets] = useState<Ticket[]>([]);
  
    useEffect(() => {
      if (id) {
        fetch(`../api/tickets/${id}`)
          .then(response => response.json())
          .then(ticketData => {
            setTicket(ticketData);
            console.log(ticketData);
          });
      }
    }, [id]);

    useEffect(() => {
      if (id) {
        fetch(`../api/ticket_comments`)
          .then(response => response.json())
          .then(commentData => {
            setComments(commentData);
            console.log(commentData);
          });
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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        user_id: currUser.id,
        ticket_id: ticket.id,
        comment,
      };
      const response = await fetch(`/api/ticket_comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    };

  return (
    <div>
      <div className="mt-4 w-8 h-8" >
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Details and updates for ticket #{ticket?.id}
          <button 
            className="bg-lightpurp hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => deleteTicket(ticket.id)} >
            <FiTrash className="w-5 h-5" />
          </button>
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Priority: {ticket?.priority}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Status: {ticket?.status}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Date Entered: {new Date(ticket?.created_at).toLocaleDateString()}</p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Description: {ticket?.description}</p>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Comments</h1>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Date: {new Date(comment.created_at).toLocaleDateString()}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Comment: {comment.comment}
              </p>
            </div>
          ))
        ) : (
          <p>No comments available</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor = "comments" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Comments:
        </label>
        <textarea id="comments" value={comment} onChange={(e) => setComment(e.target.value)}
        rows={4} cols={50} 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment">
        </textarea>
        <button type = "submit" className="bg-lightpurp hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"> 
          Submit 
        </button>
      </form>
    </div>
  );
};

export default TicketInfo;