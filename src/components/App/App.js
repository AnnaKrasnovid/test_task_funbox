import React from 'react';
import './App.css';
import Lead from '../Lead/Lead';
import dataCards from '../../utils/dataCards';

function App() {
const [cards, setCards] = React.useState([]);
//const [isProductInStock, setIsProductInStock] = React.useState(true);

function handleSelectCard() {

}

React.useEffect(() =>{
  setCards(dataCards);
}, [cards])

  return (
    <main className='page'>
      <Lead cards={cards} />
    </main>
  );
}

export default App;
