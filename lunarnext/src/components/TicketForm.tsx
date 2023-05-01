// src/components/TicketForm.tsx
import React from 'react';
import { useTicketStore } from '../../store/ticketdata';
import { addTicket } from '../pages/api/addticket';

const TicketForm: React.FC = () => {
  const newTicketData = useTicketStore((state) => state.newTicketData);
  const setNewTicketData = useTicketStore((state) => state.setNewTicketData);
  const fetchAndSetTickets = useTicketStore((state) => state.fetchAndSetTickets);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewTicketData({ [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addTicket(newTicketData);
    fetchAndSetTickets(); // Refresh the ticket list after adding a ticket
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={newTicketData.title}
          onChange={handleChange}
        />
      </label>
      {/* Add more input fields for other ticket properties */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => handleAddTicket(newTicketData)}
        >
        Add Ticket
        </button>
    </form>
  );
};

export default TicketForm;
