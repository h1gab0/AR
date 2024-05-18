import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function App() {
  const { key } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/reactDataDictionaryKey/${key}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, [key]);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.name}</h1>
          <p>{data.invitation}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
