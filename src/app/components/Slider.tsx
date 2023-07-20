"use client"

import { useEffect, useState } from 'react';
import { callApi } from '../util/api';

const Slider = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await callApi('/gamingPC');
        setData(result);
      } catch (error) {
        console.error('Error calling API:', error);
      }
    };

    fetchData();

    return () => {
      fetchData();
    };

  }, []);
  
  return (
    <div>
      {data && (
        <div>{JSON.stringify(data, null, 2)}</div>
      )}
    </div>
  );
};

export default Slider;