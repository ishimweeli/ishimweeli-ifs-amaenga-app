
const BASE_URL = process.env.REACT_APP_BASE_URL; // set your base URL in .env file
import React, { useState, useEffect } from 'react';

function FetchData() {
  console.log("hello")
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url, options) {
      try {
        url="/amarenga"
        console.log(url,BASE_URL)
        const response = await fetch(`${BASE_URL}${url}`, {
          
          // headers: {
          //   'Content-Type': 'application/json',
          //   Accept: 'application/json',
          //   ...options.headers,
          // },
          // ...options,
        });
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        console.log(error)
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}
export default FetchData;