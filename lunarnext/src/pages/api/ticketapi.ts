const API_URL = 'http://127.0.0.1:5555'; // Replace with your backend URL

export async function fetchTickets() {
  const response = await fetch(`${API_URL}/api/tickets`);
  const data = await response.json();
  return data;
}