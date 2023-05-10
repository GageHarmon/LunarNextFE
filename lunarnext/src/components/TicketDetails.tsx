import React, {useState} from "react";
import { FiTrash, FiEdit } from "react-icons/fi";
import { Ticket } from "../pages/api/ticketapi";
import Select from "react-select";


interface TicketDetailsProps {
  ticket: Ticket | undefined;
  deleteTicket: (ticketId: number) => void;
  admin: boolean;  // add this line
}

const TicketDetails: React.FC<TicketDetailsProps> = ({
  ticket,
  deleteTicket,
  admin,
}) => {

  const [editingStatus, setEditingStatus] = useState(false);
  const [editingPriority, setEditingPriority] = useState(false);
  const [editingCategory, setEditingCategory] = useState(false);
  const [editingDescription, setEditingDescription] = useState(false);
  const [status, setStatus] = useState(ticket?.status);
  const [priority, setPriority] = useState(ticket?.priority);
  const [category, setCategory] = useState(ticket?.category);
  const [description, setDescription] = useState(ticket?.description || "");


  const statusOptions = [
    { value: "None", label: "None" },
    { value: "Open", label: "Open" },
    { value: "In Progress", label: "In Progress" },
    { value: "Closed", label: "Closed" },
  ];

  const priorityOptions = [
    { value: "None", label: "None" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
    { value: "Urgent", label: "Urgent" },
  ];
  
  const categoryOptions = [
    { value: "None", label: "None" },
    { value: "Onsite", label: "Onsite" },
    { value: "Remote", label: "Remote" },
  ];

  const handleUpdate = async (field: string, value: string) => {
    try {
      const response = await fetch(`/api/tickets/${ticket?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [field]: value }),
      });

      if (!response.ok) {
        console.error("Failed to update ticket");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // ++++ CREDIT TO GPT FOR ASSISTING WITH CHANGING EDITS TO DROPDOWNS ++++
  const handleSubmit = (field: string, value: string) => {
    handleUpdate(field, value);
    if (field === "status") {
      setEditingStatus(false);
    } else if (field === "priority") {
      setEditingPriority(false);
    } else if (field === "category") {
      setEditingCategory(false);
    } else if (field === "description") {
      setEditingDescription(false);
    }
  };

  return (
    <div className=" p-6 shadow-2xl rounded-md">
      <h1 className="text-2xl font-semibold text-navpurp dark:text-white">
        Details and Notes for ticket #{ticket?.id}
        <button
          className="bg-pinkred text-white font-bold py-2 px-4 rounded ml-64"
          onClick={() => deleteTicket(ticket.id)}
        >
          <FiTrash className="w-5 h-5 " />
        </button>
      </h1>
      <p className="mt-8 text-md text-navpurp dark:text-gray-400">
        <span className="font-bold">Status: </span>
        {editingStatus ? (
          <>
            <Select
              value={statusOptions.find((option) => option.value === status)}
              onChange={(option) => setStatus(option.value)}
              options={statusOptions}
              className="text-navpurp dark:text-white max-w-sm"
            />
            <button onClick={() => handleSubmit("status", status)}>
              Save
            </button>
            <button
              className="ml-2 text-sm text-pinkred underline"
              onClick={() => {
                setStatus(ticket?.status || "");
                setEditingStatus(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{ticket?.status}</span>
            {admin && <button onClick={() => setEditingStatus(true)}>
              <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
            </button>}
          </>
        )}
      </p>
      <p className="mt-4 text-md text-navpurp dark:text-gray-400">
        <span className="font-bold">Priority: </span>
        {editingPriority ? (
          <>
            <Select
              value={priorityOptions.find((option) => option.value === ticket?.priority)}
              onChange={(option) => setPriority(option.value)}
              options={priorityOptions}
              className="text-navpurp dark:text-white max-w-sm"
            />
            <button onClick={() => handleSubmit("priority", priority)}>
              Save
            </button>
            <button
              className="ml-2 text-sm text-pinkred underline"
              onClick={() => {
                setPriority(ticket?.priority || "");
                setEditingPriority(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{ticket?.priority}</span>
            {admin && <button onClick={() => setEditingPriority(true)}>
              <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
            </button>}
          </>
        )}
      </p>
      <p className="mt-4 text-md text-navpurp dark:text-gray-400">
        <span className="font-bold">Category: </span>
        {editingCategory ? (
          <>
            <Select
              value={categoryOptions.find((option) => option.value === ticket?.category)}
              onChange={(option) => setCategory(option.value)}
              options={categoryOptions}
              className="text-navpurp dark:text-white max-w-sm"
            />
            <button onClick={() => handleSubmit("category", category)}>
              Save
            </button>
            <button
              className="ml-2 text-sm text-pinkred underline"
              onClick={() => {
                setCategory(ticket?.category || "");
                setEditingCategory(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{ticket?.category}</span>
            {admin && <button onClick={() => setEditingCategory(true)}>
              <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
            </button>}
          </>
        )}
      </p>
      <p className="mt-4 text-md text-navpurp dark:text-gray-400 max-w-2xl">
        <span className="font-bold">Description: </span>
        {editingDescription ? (
          <>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              rows={4}
            />
            <button
              className="ml-2 text-sm text-navpurp underline"
              onClick={() => {
                handleSubmit("description", description);
                setEditingDescription(false);
              }}
            >
              Save
            </button>
            <button
              className="ml-2 text-sm text-pinkred underline"
              onClick={() => {
                setDescription(ticket?.description || "");
                setEditingDescription(false);
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <span>{ticket?.description}</span>
            <button
              className="ml-2 text-sm text-pinkred underline"
              onClick={() => setEditingDescription(true)}
            >
              Edit
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default TicketDetails;
