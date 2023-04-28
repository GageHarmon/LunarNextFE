import React, { useEffect } from 'react';
import DashTable from '../components/DashTable';
import { useDataStore } from '../../store/data';

const Dashboard: React.FC = () => {
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/tickets');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [setData]);

  return (
    <div>
      <DashTable data={data} />
    </div>
  );
};

export default Dashboard;
