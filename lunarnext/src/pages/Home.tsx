// import React, { useState } from 'react';
import Layout from '../components/Layout';

interface HomeProps {
    currUser: any;
  }
  
  export default function Home({ currUser }: HomeProps) {
    if (!currUser) {
      return <div className="text-dblue">Loading.. </div>;
    }
  
  return (
    <Layout>
      <div className="p-4 mb-8 rounded-lg">
          <h2 className="text-3xl font-bold text-lightpurp">Welcome {currUser.username}</h2>
      </div>
    </Layout>
  );
}