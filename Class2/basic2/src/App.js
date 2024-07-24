import React from 'react';
import './App.css';
import products from './components/Products';
const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },

    {
      id: 'p2',
      title: 'Sirf Excel',
      amount: 100,
      date: new Date(2021, 8, 10),
    },

    {
      id: 'p3',
      title: 'Tide',
      amount: 300,
      date: new Date(2021, 3, 132),
    },

    {
      id: 'p4',
      title: 'Maggi',
      amount: 400,
      date: new Date(2024, 4, 40),
    },
  ];

  return (
    <div>
      <product items={products}></product>
    </div>
  )
}



export default App;
