import React, { useState, useMemo } from 'react';

const Calculator = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // Calcolo "costoso" della somma utilizzando useMemo
  const sum = useMemo(() => {
    console.log("Calcolo della somma...");
    return number1 + number2;
  }, [number1]); // Dipendenze: number1 e number2

  return (
    <div>
      <h2>Esempio useMemo</h2>
      <input 
        type="number" 
        value={number1} 
        onChange={(e) => setNumber1(parseInt(e.target.value))} 
      />
      +
      <input 
        type="number" 
        value={number2} 
        onChange={(e) => setNumber2(parseInt(e.target.value))} 
      />
      <p>La somma di {number1} e {number2} è: {sum}</p>
    </div>
  );
};

export default Calculator;
