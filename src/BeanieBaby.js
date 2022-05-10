import { Link } from 'react-router-dom';
import React from 'react';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <Link to={`/beanies/${beanieBaby.id}`}>
      <div className='beanie-baby'>
        <h3>{beanieBaby.title}</h3>
        <img src={beanieBaby.image} />
      </div>
    </Link>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
