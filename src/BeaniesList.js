import BeanieBaby from './BeanieBaby.js';
// import { useState } from 'react';

export default function BeaniesList({ beanieBabies }) {
  // const [beanieBabies, setBeanieBabies] = useState([]);
  return (
    <div className='beanies'>
      {/* render out the beanie babies as a list */}
      {beanieBabies.map((beanieBaby) => 
        <BeanieBaby key={beanieBaby.id} beanieBaby={beanieBaby} />
      ) }
    </div>);
}
