import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  return (
    <div>
      {/* Veriyi kullanarak bileşenin render işlemlerini gerçekleştirin */}
      {Object.entries(data).map(([fruit, markets]) => (
        <div key={fruit}>
          <h2>{fruit}</h2>
          
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
