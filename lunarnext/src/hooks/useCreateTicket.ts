import { useState } from 'react';
import { useRouter } from 'next/router';

type UseCreateTicket = {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  priority: string;
  setPriority: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
};

export const useCreateTicket = (userId: string): UseCreateTicket => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      user_id: userId,
      title,
      description,
      category,
      priority,
      status,
    };
    const response = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Ticket created successfully.');
      router.push('/tickets');
    } else {
      alert('Error creating ticket. Please try again.');
    }
  };

  return {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    priority,
    setPriority,
    status,
    setStatus,
    handleSubmit,
  };
};
