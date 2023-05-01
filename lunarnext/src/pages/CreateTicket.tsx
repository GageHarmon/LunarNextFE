import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '../../store/userdata';

const CreateTicket: React.FC = () => {
    
    const router = useRouter();
    const currentUser = useUserStore((state) => state.currUser);
    const user_id = currentUser?.id;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [priority, setPriority] = useState('');
    const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { user_id, title, description, category, priority, status };
    const response = await fetch('/api/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Ticket created successfully.');
      router.push('/Tickets');
    } else {
      alert('Error creating ticket. Please try again.');
    }
  };

  return (
    <div>
        <h1>Create Ticket</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title:
            </label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            </div>
            <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Onsite">Onsite</option>
                <option value="Category2">Remote</option>
            </select>
            </div>
            <div>
            <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Priority:</label>
            <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            </div>
            <div>
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
            </select>
            </div>
            <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description:
            </label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} 
            rows={4} 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Description of the issue or error...">
            </textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default CreateTicket;