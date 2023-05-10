import { useRouter } from "next/router";
import { FiTrash, FiEdit } from "react-icons/fi";
import { useState } from "react";
import { useUserStore } from "../../../store/userdata"; // Import the Zustand store
  
  export default function Home() {
    const currUser = useUserStore((state) => state.currUser); // Access the currUser state from the Zustand store
    const router = useRouter();

    if (!currUser) {
      return <div className="text-dblue">Please login to continue... </div>;
    }

    const [editingField, setEditingField] = useState("");
    const [username, setUsername] = useState(currUser?.username || "");
    const [email, setEmail] = useState(currUser?.email || "");
    const [first_name, setFirstName] = useState(currUser?.first_name || "");
    const [last_name, setLastName] = useState(currUser?.last_name || "");
  
    const handleEdit = async (field: string, value: string) => {
      try {
        const res = await fetch(`/api/users/${currUser.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ [field]: value }),
        });
        const data = await res.json();
        router.push("/profile");
      }
      catch (error) {
        console.log(error);
      }
    };
  
    const handleSubmit = (field: string, value: string) => {
      handleEdit(field, value);
      setEditingField("");
    };
  
    const handleCancel = (field: string) => {
      switch (field) {
        case 'username':
          setUsername(currUser?.username || "");
          break;
        case 'email':
          setEmail(currUser?.email || "");
          break;
        case 'first_name':
          setFirstName(currUser?.first_name || "");
          break;
        case 'last_name':
          setLastName(currUser?.last_name || "");
          break;
        default:
          break;
      }
      setEditingField("");
    };
  
    const handleDelete = async () => {
      const res = await fetch(`/api/users/${currUser.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: currUser.id }),
      });
      const data = await res.json();
      router.push("/");
    };
  
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-navpurp fixed top-20">Welcome to Lunarbreeze {currUser.first_name}</h1>
      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-navpurp mb-2">User Information</h3>
      </div>
      <div className="mt-10 shadow-2xl p-12 rounded-md">
      <p className="mt-4 text-md text-navpurp dark:text-gray-400 max-w-2xl">
          <span className="font-bold">Username: </span>
          {editingField === 'username' ? (
            <>
              <textarea
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-2 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows={1}
              />
              <button onClick={() => handleSubmit("username", username)}>Save</button>
              <button 
                className="ml-2 text-sm text-pinkred underline"
                onClick={() => handleCancel("username")}>Cancel</button>
            </>
          ) : (
            <>
              <span>{username}</span>
              <button onClick={() => setEditingField("username")}>
                <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
              </button>
            </>
          )}
        </p>
        <p className="mt-12 text-md text-navpurp dark:text-gray-400 max-w-2xl">
          <span className="font-bold">Email: </span>
          {editingField === 'email' ? (
            <>
              <textarea
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows={1}
              />
              <button onClick={() => handleSubmit("email", email)}>Save</button>
              <button 
                className="ml-2 text-sm text-pinkred underline"
                onClick={() => handleCancel("email")}>Cancel</button>
            </>
          ) : (
            <>
              <span>{email}</span>
              <button onClick={() => setEditingField("email")}>
                <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
              </button>
            </>
          )}
        </p>
        <p className="mt-12 text-md text-navpurp dark:text-gray-400 max-w-2xl">
          <span className="font-bold">First Name: </span>
          {editingField === 'first_name' ? (
            <>
              <textarea
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-2 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows={1}
              />
              <button onClick={() => handleSubmit("first_name", first_name)}>Save</button>
              <button 
                className="ml-2 text-sm text-pinkred underline"
                onClick={() => handleCancel("first_name")}>Cancel</button>
            </>
          ) : (
            <>
              <span>{first_name}</span>
              <button onClick={() => setEditingField("first_name")}>
                <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
              </button>
            </>
          )}
        </p>
        <p className="mt-12 text-md text-navpurp dark:text-gray-400 max-w-2xl">
          <span className="font-bold">Last Name: </span>
          {editingField === 'last_name' ? (
            <>
              <textarea
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                className="p-2 w-full text-sm text-navpurp bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                rows={1}
              />
              <button onClick={() => handleSubmit("last_name", last_name)}>Save</button>
              <button 
                className="ml-2 text-sm text-pinkred underline"
                onClick={() => handleCancel("last_name")}>Cancel</button>
            </>
          ) : (
            <>
              <span>{last_name}</span>
              <button onClick={() => setEditingField("last_name")}>
                <FiEdit className="w-5 h-5 ml-2 text-pinkred" />
              </button>
            </>
          )}
        </p>
      </div>
      <button
          className="bg-pinkred text-white font-bold py-2 px-4 rounded mt-8"
          onClick={handleDelete}>
          <FiTrash className="w-5 h-5 " />
      </button>
      <p className="mt-1 text-md text-navpurp dark:text-gray-400 max-w-2xl">
        Delete if you dare...
      </p>
    </div>
  );
}