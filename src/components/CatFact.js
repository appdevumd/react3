import React, { useState, useEffect } from 'react';

function CatFact() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://catfact.ninja/fact';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setFact(data.fact);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cat fact:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Random Cat Fact</h1>
      <p>{fact}</p>
    </div>
  );
}

export default CatFact;
