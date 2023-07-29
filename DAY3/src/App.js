import React from 'react';
import GreetingCard from './GreetingCard'; // Adjust the path based on your project structure

const App = () => {
  return (
    <div>
      <GreetingCard name="John" greeting="Welcome" />
      <GreetingCard name="Jane" greeting="Greetings" />
    </div>
  );
};

export default App;
