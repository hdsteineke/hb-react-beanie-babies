import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  return (
    <div className='beanie-baby'>
      <Link to='/about'>About</Link>
      <h3>{beanieBaby.name}</h3>
      <img src={beanieBaby.image} />
    </div>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
  );
}
