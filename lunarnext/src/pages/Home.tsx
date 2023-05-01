// import React, { useState } from 'react';

interface HomeProps {
    currUser: any;
  }
  
  export default function Home({ currUser }: HomeProps) {
    if (!currUser) {
      return <div className="text-dblue">Loading.. </div>;
    }
  
  return (
    <div className="p-4 mb-8 rounded-lg">
        <h2 className="text-3xl font-bold text-lightpurp">Welcome To LunarBreeze</h2>
    </div>
  );
}