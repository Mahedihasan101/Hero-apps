import React, { useEffect, useState } from 'react';

const Rechart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/AppData.json')
      .then(res => res.json())
      .then(jsonData => {
        console.log("Fetched Data:", jsonData);
        setData(jsonData); // এখানে state update করতে হবে ✅
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h1>Fetched data length: {data.length}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Rechart;
