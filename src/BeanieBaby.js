import { Link } from 'react-router-dom';
import React from 'react';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <div className='beanie-baby'>
      <Link to={`/beanies/${beanieBaby.id}`}>
        <h3>{beanieBaby.title}</h3>
        <img src={beanieBaby.image} />
      </Link>
    </div>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
