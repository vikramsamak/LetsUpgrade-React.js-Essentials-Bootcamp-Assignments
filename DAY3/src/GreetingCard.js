import React from 'react';
import './Greeting.css'

const GreetingCard = ({ name, greeting }) => {
  return (
    <div className="greeting-card">
      <h2 className="greeting">{greeting}</h2>
      <p className="message">Hello, {name}!</p>
    </div>
  );
};

export default GreetingCard;
