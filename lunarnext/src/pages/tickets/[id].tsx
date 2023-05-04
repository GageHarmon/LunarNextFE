import React from "react";
import { useRouter } from "next/router";
import TicketDetails from "../../components/TicketDetails";
import CommentsList from "../../components/CommentsList";
import CommentForm from "../../components/CommentForm";
import useTicket from "../../hooks/useTicket";
import useComments from "../../hooks/useComment";

interface TicketInfoProps {
  currUser: any;
  loggedIn: boolean;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ currUser }) => {
  const router = useRouter();
  const { id } = router.query;
  const { ticket, deleteTicket } = useTicket(id);
  const { comments, handleSubmit } = useComments(id, currUser);

  return (
    <div>
      <TicketDetails ticket={ticket} deleteTicket={deleteTicket} />
      <CommentsList comments={comments} />
      <CommentForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default TicketInfo;



// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { Ticket } from '../api/ticketapi';
// import { FiTrash } from 'react-icons/fi';

 
// interface TicketInfoProps {
//   currUser: any; 
//   loggedIn: boolean;
// }

// const TicketInfo: React.FC<TicketInfoProps> = ({ currUser }) => {
//     const router = useRouter();
//     const { id } = router.query;
//     const [comment, setComment] = useState<any>('');
//     const [comments, setComments] = useState<any[]>([]);
//     const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
//     const [tickets, setTickets] = useState<Ticket[]>([]);
  
//     useEffect(() => {
//       if (id) {
//         fetch(`../api/tickets/${id}`)
//           .then(response => response.json())
//           .then(ticketData => {
//             setTicket(ticketData);
//           });
//       }
//     }, [id]);

//     useEffect(() => {
//       if (id) {
//         fetch(`../api/ticket_comments`)
//           .then(response => response.json())
//           .then(commentData => {
//             const filteredComments = commentData.filter(comment => comment.ticket_id == id);
//             setComments(filteredComments);
//             console.log(filteredComments);
//           });
//       }
//     }, []);

//     const deleteTicket = async (ticketId: number) => {
//       const response = await fetch(`/api/tickets/${ticketId}`, {
//         method: 'DELETE'
//       });
//       if (response.ok) {
//         const newTickets = tickets.filter(ticket => ticket.id !== ticketId);
//         setTickets(newTickets);
//         router.push('/tickets');
//       }
//     }

//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const data = {
//         user_id: currUser.id,
//         ticket_id: ticket.id,
//         comment,
//       };

//     const response = await fetch(`/api/ticket_comments`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });
//   };

//   return (
//     <div>
//       <div className="mt-4 w-8 h-8" >
//       </div>
//       <div>
//         <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Details and updates for ticket #{ticket?.id}
//           <button 
//             className="bg-pinkred text-white font-bold py-2 px-4 rounded ml-4"
//             onClick={() => deleteTicket(ticket.id)} >
//             <FiTrash className="w-5 h-5 " />
//           </button>
//         </h1>
        // <p className="mt-1 text-sm text-black dark:text-gray-400"> <span className="font-bold">Date Entered: </span><span>{new Date(ticket?.created_at).toLocaleDateString()}</span></p>
        // <p className="mt-1 text-sm text-black dark:text-gray-400"> <span className="font-bold">Status: </span> <span>{ticket?.status}</span></p>
        // <p className="mt-1 text-sm text-black dark:text-gray-400"> <span className="font-bold">Priority: </span> <span>{ticket?.priority}</span></p>
        // <p className="mt-1 text-sm text-black dark:text-gray-400"> <span className="font-bold">Category: </span> <span>{ticket?.category}</span></p>
        // <p className="mt-1 text-sm text-black dark:text-gray-400"> <span className="font-bold">Description: </span><span>{ticket?.description}</span></p>
//       </div>
//       <h1 className="bg-gradient-to-br from-lightpurp to-navpurp text-white font-bold py-2 px-4 rounded mt-2">Comments</h1>
//       <div className="py-2 px-4 rounded mt-2">
//           {comments.map((comment) => (
//             <div key={comment.id}>
//               {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                 Date: {new Date(comment.created_at).toLocaleDateString()}
//               </p> */}
//               <p className="mt-1 text-sm text-black dark:text-gray-400">
//                 <span className="font-bold"> Comment: </span><span>{comment.comment} </span>
//               </p>
//             </div>
//           ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor = "comments" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
//           Comments:
//         </label>
//         <textarea id="comments" value={comment} onChange={(e) => setComment(e.target.value)}
//         rows={4} cols={50} 
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         placeholder="Leave a comment">
//         </textarea>
//         <button type = "submit" className="bg-gradient-to-br from-lightpurp to-navpurp text-white font-bold py-2 px-4 rounded mt-2"> 
//           Submit 
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TicketInfo;