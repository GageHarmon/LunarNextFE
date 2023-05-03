const API_URL = 'http://127.0.0.1:5555'; // Replace with your backend URL

export type Ticket = {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;
  status: string;
  created_at: string;
  comments: Comment[];
};

export interface Comment {
  id: number;
  ticket_id: number;
  user_id: number;
  comment: string;
  created_at: string;
}


export async function fetchTickets() {
  const response = await fetch(`${API_URL}/api/tickets`);
  const data = await response.json();
  return data;
}

export const fetchTicketById = async (id: number): Promise<Ticket | undefined> => {
  try {
    const res = await fetch(`${API_URL}/api/tickets/${id}`);
    if (!res.ok) {
      console.error(`Error fetching ticket by ID: ${res.status} ${res.statusText}`);
      console.error(await res.text());
      return undefined;
    }
    const data: Ticket = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ticket by ID: ${error}`);
    return undefined;
  }
};
