// import Image from "next/image";

import { useRouter } from "next/router";
import { useUserStore } from "../../../store/userdata"; // Import the Zustand store
  
  export default function Home() {
    const currUser = useUserStore((state) => state.currUser); // Access the currUser state from the Zustand store
    const router = useRouter();

    if (!currUser) {
      return <div className="text-dblue">Please login to continue... </div>;
    }
  
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
      <div className="flex items-center mt-4">
        {/* <Image src="NewLunar.png" alt="Lunarbreeze Logo" className="mr-2 w-4 h-4"/> */}
        <h1 className="text-2xl font-bold text-navpurp">Welcome to Lunarbreeze</h1>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-navpurp mb-2">User Information</h3>
        <p> Username: {currUser.username} </p>
        <p> Email: {currUser.email} </p>
        <p> First Name: {currUser.first_name} </p>
        <p> Last Name: {currUser.last_name} </p>
      </div>
      <button 
        className="text-white bg-gradient-to-bl from-lightpurp to-navpurp hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleDelete}
        >
        Delete Account
      </button>
    </div>
  );
}