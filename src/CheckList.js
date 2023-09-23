import React, { useState } from 'react';
import './CheckList.css';
import { Link } from 'react-router-dom';


function Checklist() {
 const [curryItems, setCurryItems] = useState([
  { id: 1, text: 'Oil for frying', done: false },
  { id: 2, text: '2 Onions, finely sliced', done: false },
  { id: 3, text: '3 tbsp, Thai green curry paste', done: false },
  { id: 4, text: '1 Red chilli,  sliced', done: false },
  { id: 5, text: '20g Fresh ginger, grated', done: false },
  { id: 6, text: '1 head Broccoli,  cut into florets', done: false },
  { id: 7, text: '400ml tin light coconut milk', done: false },
  { id: 8, text: '2 Pak choi,  sliced', done: false },
  { id: 9, text: '300g peeled raw prawns (defrosted if frozen)', done: false },
  { id: 10, text: '1.5 tbsp fish sauce', done: false },
  { id: 11, text: 'Grated zest and juice 1 lime, plus wedges or halves to serve', done: false },
  { id: 12, text: 'Bunch fresh coriander, chopped', done: false },
  { id: 13, text: 'Steamed rice to serve', done: false },
 ]);

 const [friedRiceItems, setFriedRiceItems] = useState([
  { id: 1, text: '3 tablespoons butter, divided', done: false },
  { id: 2, text: '2 large eggs, whisked', done: false },
  { id: 3, text: '2 medium carrots, peeled and diced', done: false },
  { id: 4, text: '1 small white onion,  diced', done: false },
  { id: 5, text: '1/2 cup frozen peas', done: false },
  { id: 5, text: '3 cloves garlic, minced', done: false },
  { id: 5, text: 'salt and black pepper', done: false },
  { id: 5, text: '4 cups cooked and chilled rice (I prefer short-grain white rice)', done: false },
  { id: 5, text: '3 green onions, thinly sliced', done: false },
  { id: 5, text: '3-4 tbsp soy sauce, or more to taste', done: false },
  { id: 5, text: '2 tbsp oyster sauce, (optional)', done: false },
  { id: 5, text: '1/2 tsp sesame oil', done: false },
 ]);

 const handleToggleCurry = (itemId) => {
  setCurryItems((prevItems) =>
   prevItems.map((item) =>
    item.id === itemId ? { ...item, done: !item.done } : item
   )
  );
 };

 const handleToggleFriedRice = (itemId) => {
  setFriedRiceItems((prevItems) =>
   prevItems.map((item) =>
    item.id === itemId ? { ...item, done: !item.done } : item
   )
  );
 };

 return (
  <div className="container">
   <div className='recipe1'>

    <div className="heading">
     <h2>Prawn Curry On Rice</h2>


     <div className="icon">
      <Link to="">
       <img src="/images/Share Icon.svg" alt="Share icon"></img>
      </Link>

      <Link to="">
       <img src="/images/Delete Icon.svg" alt="Delete icon"></img>
      </Link>

     </div>
    </div>
    <ul>
     {curryItems.map((item) => (
      <li key={item.id}>
       <label className="round-checkbox">
        <input
         type="checkbox"
         checked={item.done}
         onChange={() => handleToggleCurry(item.id)}
        />
        <span className="checkmark"></span>
        {item.text}
       </label>
      </li>
     ))}
    </ul>
   </div>

   <div className='recipe1'>

    <div className="heading">
     <h2>Fried Rice</h2>


     <div className="icon">
      <Link to="">
       <img src="/images/Share Icon.svg" alt="Share icon"></img>
      </Link>
      <Link to="">
       <img src="/images/Delete Icon.svg" alt="Delete icon"></img>
      </Link>

     </div>
    </div>
    <ul>
     {friedRiceItems.map((item) => (
      <li key={item.id}>
       <label className="round-checkbox">
        <input
         type="checkbox"
         checked={item.done}
         onChange={() => handleToggleFriedRice(item.id)}
        />
        <span className="checkmark"></span>
        {item.text}
       </label>
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
}

export default Checklist;
