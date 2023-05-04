import Image from "next/image";

interface HomeProps {
    currUser: any;
  }
  
  export default function Home({ currUser }: HomeProps) {
    if (!currUser) {
      return <div className="text-dblue">Please login to continue... </div>;
    }
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center mt-4">
        <Image src="NewLunar.png" alt="Lunarbreeze Logo" className="mr-2"/>
        <h1 className="text-2xl font-bold text-navpurp">Welcome to Lunarbreeze</h1>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-navpurp mb-2">User Information</h3>
        <p> Username: {currUser.username} </p>
        <p> Email: {currUser.email} </p>
      </div>
    </div>
  );
}