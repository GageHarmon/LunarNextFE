
interface DashboardProps {
  currUser: any;
}

export default function Dashboard({ currUser }: DashboardProps) {
  if (!currUser) {
    return <div className="text-dblue">Loading.. </div>;
  }
  
  return (
    <div className="p-4 mb-8 rounded-lg">
        <h2 className="text-3xl font-bold text-lightpurp">Welcome {currUser.username}</h2>
    </div>
  );
};




// +++++ZUSTAND DATA STATE FOR TICKETS+++++

// import DashTable from '../components/DashTable';
// import { useDataStore } from '../../store/data';
{/* <DashTable /> */}
// const data = useDataStore((state) => state.data);
// const setData = useDataStore((state) => state.setData);

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch('/api/tickets');
//     const result = await response.json();
//     setData(result);
//   };

//   fetchData();
// }, [setData]);
// data={data} <--- pass into DashTable