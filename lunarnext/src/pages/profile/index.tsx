
interface HomeProps {
    currUser: any;
  }
  
  export default function Home({ currUser }: HomeProps) {
    if (!currUser) {
      return <div className="text-dblue">Please login to continue... </div>;
    }
  
  return (
    <div>
      <div className="p-4 mb-8 rounded-lg">
          <h2 className="text-3xl font-bold text-lightpurp">Welcome to LunarBreeze</h2>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-lightpurp mb-2">User Information</h3>
        <p> Username: {currUser.username} </p>
        <p> Email: {currUser.email} </p>
      </div>
      
    </div>
  );
}