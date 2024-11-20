
import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const handleGenerate = async () => {
    const response = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        age: 18,
        weight: 64,
        height: 181,
        goal: 'gain'
      }),
    });
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="App">
      <h1>MuscleApp</h1>
      <button onClick={handleGenerate}>Générer Programme</button>
      {data && (
        <div>
          <h2>Programme</h2>
          <p>Calories: {data.calories} kcal</p>
          <p>Protéines: {data.macros.proteins} g</p>
          <p>Glucides: {data.macros.carbs} g</p>
          <p>Lipides: {data.macros.fats} g</p>
        </div>
      )}
    </div>
  );
}

export default App;
