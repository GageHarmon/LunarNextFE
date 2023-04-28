// import React, { useState } from 'react';
import Layout from '../components/Layout';

// interface HomeProps {
//     currUser: any;
//   }
// { currUser }: HomeProps
  
  export default function Home() {
  //   if (!currUser) {
  //     return <div className="text-dblue">Loading.. </div>;
  //   }
  
  return (
    <Layout>
      <div className="p-4 mb-8 rounded-lg">
          <h2 className="text-3xl font-bold text-lightpurp">Home</h2>
      </div>
    </Layout>
  );
}