import React, { useState } from 'react';
import ItemAns from './components/ItemAns';

function App() {
  const [number, setNumber] = useState(0);
  const [selected, setSelected] = useState([]);

  const options = [
    {
      question: '¿A demás de shampoo, que más te pones en el cabello?',
      answers: [
        {
          name: 'Acondicionador',
          value: 67
        },
        {
          name: 'Gel',
          value: 10
        },
        {
          name: 'Spray',
          value: 9
        },
        {
          name: 'Enjuague',
          value: 8
        },
        {
          name: 'Aceite',
          value: 6
        },
      ]
    },
    {
      question: 'Si fueras hombre, ¿Cada cuánto te rasurarías la barba?',
      answers: [
        {
          name: 'Diario',
          value: 36
        },
        {
          name: 'Dos días',
          value: 32
        },
        {
          name: 'Tres días',	
          value: 17
        },
        {
          name: 'Semana',
          value: 13
        },
        {
          name: 'Diez días',
          value: 2
        },
      ],
    },
    {
      question: 'Cuando te asoleas mucho, ¿Qué parte del cuerpo suele quemarse más?',
      answers: [
        {
          name: 'Cara',
          value: 40
        },
        {
          name: 'Espalda',
          value: 33
        },
        {
          name: 'Hombros',	
          value: 10
        },
        {
          name: 'Cuello',
          value: 9
        },
        {
          name: 'Brazos',
          value: 8
        },
      ],
    },
    {
      question: 'Algo que las mujeres hacen a su cabello y los hombres no',
      answers: [
        {
          name: 'Pintar',
          value: 32
        },
        {
          name: 'Alaciar',
          value: 27
        },
        {
          name: 'Rizos',	
          value: 24
        },
        {
          name: 'Permanente',
          value: 10
        },
        {
          name: 'Peinados',
          value: 7
        },
      ],
    },
  ];

  const handleNext = () => {
    setNumber((number + 1) % options.length);
    setSelected([]);
  };

  const handleClick = (index) => {
    setSelected([...selected, index]);
  }

  return (
    <div className="App">
      <div style={{
          textAlign: 'center',
          marginTop: '60px',
          marginBottom: '70px',
          color: '#dc1b33',
          fontSize: '25px',
        }}>
        <h2>{options[number].question}</h2>
      </div>
      <div>
        {options[number].answers.map((answer, index) => (
          <ItemAns key={index} name={answer.name} number={answer.value} selected={selected.includes(index)} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button style={{
        marginTop: '30px',
        padding: '10px 20px',
        fontSize: '20px',
        backgroundColor: 'white',
        color: '#dc1b33',
        border: '1px solid #dc1b33',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'absolute',
        bottom: '80px',
        left: '74%',
      }} onClick={handleNext}>Next</button>
    </div>
  );
}

export default App;