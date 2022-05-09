import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BeaniesPage from './BeaniesPage';
import BeanieDetail from './BeanieDetail';

export default function App() {
  const [beanieBabies, setBeanBabies] =useState([]);
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/'>
            {/* this home page route should list all the beanies */}

          </Route>
          <Route path='/about'> 
            {/* this route should point to a particulat beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}