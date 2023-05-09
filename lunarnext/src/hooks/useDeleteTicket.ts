import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Ticket } from "../pages/api/ticketapi";

const useDeleteTicketById = (id: any) => {
  const router = useRouter();
  const [ticket, setTicket] = useState<Ticket | undefined>(undefined);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    if (id) {
      fetch(`../api/tickets/${id}`)
        .then((response) => response.json())
        .then((ticketData) => {
          setTicket(ticketData);
        });
    }
  }, [id]);

  const deleteTicket = async (ticketId: number) => {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const newTickets = tickets.filter((ticket) => ticket.id !== ticketId);
      setTickets(newTickets);
      router.push("/tickets");
    }
  };

  return { ticket, deleteTicket };
};

export default useDeleteTicketById;
