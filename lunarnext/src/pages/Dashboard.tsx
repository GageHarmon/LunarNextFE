
interface DashboardProps {
  currUser: any;
}

export default function Dashboard({ currUser }: DashboardProps) {
  if (!currUser) {
    return <div className="text-dblue">Please login to continue... </div>;
  }
  
  return (
    <div className="p-4 mb-8 rounded-lg">
        <h2 className="text-3xl font-bold text-lightpurp">{currUser.username}&apos;s Dashboard</h2>
    </div>
  );
};