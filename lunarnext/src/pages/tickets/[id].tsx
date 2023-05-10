import React from "react";
import { useRouter } from "next/router";
import TicketDetails from "../../components/TicketDetails";
import CommentsList from "../../components/CommentsList";
import CommentForm from "../../components/CommentForm";
import useDeleteTicketById from "../../hooks/useDeleteTicket";
import useEditComments from "../../hooks/useEditComments";
// import { fetchYourTicketData, fetchYourCommentsData } from '../api/ticketcomment';


interface TicketInfoProps {
  currUser: any;
  loggedIn: boolean;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ currUser }) => {
  const router = useRouter();
  const { id } = router.query;
  const { ticket, deleteTicket } = useDeleteTicketById(id);
  const { comments, handleSubmit, removeComment } = useEditComments(id, currUser);

  return (
    <div>
      <TicketDetails ticket={ticket} deleteTicket={deleteTicket} admin={currUser.admin}/>
      <CommentsList comments={comments} onDeleteComment={removeComment} />
      <CommentForm handleSubmit={handleSubmit}/>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const { id } = context.query;

//   const ticket = await fetchYourTicketData(id);
//   const comments = await fetchYourCommentsData(id);

//   return {
//     props: {
//       ticket,
//       comments,
//     }, 
//   }
// }

export default TicketInfo;
