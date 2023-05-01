// Add a new ticket
export async function addTicket(ticketData: any) {
    const response = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ticketData),
    });
    return response.json();
  }
  
  // Remove a ticket
  export async function removeTicket(ticketId: number) {
    const response = await fetch(`/api/tickets/${ticketId}`, {
      method: 'DELETE',
    });
    return response.json();
  }
  