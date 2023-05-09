import React from "react";
import { useRouter } from "next/router";
import TicketDetails from "../../components/TicketDetails";
import CommentsList from "../../components/CommentsList";
import CommentForm from "../../components/CommentForm";
import useDeleteTicketById from "../../hooks/useDeleteTicket";
import editComments from "../../hooks/useEditComments";

interface TicketInfoProps {
  currUser: any;
  loggedIn: boolean;
}

const TicketInfo: React.FC<TicketInfoProps> = ({ currUser }) => {
  const router = useRouter();
  const { id } = router.query;
  const { ticket, deleteTicket } = useDeleteTicketById(id);
  const { comments, handleSubmit } = editComments(id, currUser);

  return (
    <div>
      <TicketDetails ticket={ticket} deleteTicket={deleteTicket} />
      <CommentsList comments={comments}/>
      <CommentForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default TicketInfo;