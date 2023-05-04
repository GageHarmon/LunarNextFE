import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '../../../store/userdata';

const CreateTicket: React.FC = () => {
  const router = useRouter();

  // set a selected user so the dropdown could select the user placing the ticket
  // work around until I figure out how to just grab UID on ticket submit
  const [selectedUser, setSelectedUser] = useState('');
  const { users, fetchAndSetUsers } = useUserStore((state) => ({
    users: state.users,
    fetchAndSetUsers: state.fetchAndSetUsers,
  }));

  // states for dropdown menus
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  // submit ticket
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting ticket:', {
      user_id: selectedUser,
      title,
      description,
      category,
      priority,
      status,
    });
    const data = {
      user_id: selectedUser,
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
      // if ticket is created, redirect to tickets page
      alert('Ticket created successfully.');
      router.push('/tickets');
    } else {
      alert('Error creating ticket. Please try again.');
    }
  };

  useEffect(() => {
    fetchAndSetUsers();
  }, [fetchAndSetUsers]);

  return (
    <div className="relative w-full mx-auto sm:rounded-lg text-navpurp">
        <h1>Create Ticket</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-navpurp dark:text-white"
          >
            User:
          </label>
          <select
            id="user"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-navpurp text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select a user</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
            <label htmlFor="title" className="block mb-2 mt-4 text-sm font-medium text-navpurp dark:text-white">
              Title:
            </label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} 
                className="bg-gray-50 border border-gray-300 text-navpurp text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-navpurp dark:text-white">
              Category:
            </label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-navpurp text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
            </select>
            </div>
            <div>
            <label htmlFor="priority" className="block mb-2 mt-4 text-sm font-medium text-navpurp dark:text-white">
              Priority:
            </label>
            <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} className="bg-gray-50 border border-gray-300 text-navpurp text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
            </select>
            </div>
            <div>
            <label htmlFor="status" className="block mb-2 mt-4 text-sm font-medium text-navpurp dark:text-white">
              Status:
            </label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} className="bg-gray-50 border border-gray-300 text-navpurp text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Closed">Closed</option>
            </select>
            </div>
            <div className="mb-6">
            <label htmlFor="description" className="block mb-2 mt-4 text-sm font-medium text-navpurp dark:text-white">
              Description:
            </label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} 
            rows={4} 
            className="block p-2.5 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Description of the issue or error...">
            </textarea>
            </div>
            <button type="submit" className='text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              Submit
            </button>
      </form>
    </div>
  );
};

export default CreateTicket;