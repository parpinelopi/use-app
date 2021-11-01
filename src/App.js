
import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter as Router, Switch, Route, Link}from 'react-router-dom'
import PriceComparison from './pages/PriceComparison';
import SuggestArea from './pages/SuggestArea';

function App() {
  return (
    <Router>
    <div className="App">

      <Link to = '/homepage'>
      <li> Homepage </li>
      </Link>
      <Link to = '/pricecomparison'>
      <li> Price comparison </li>
      </Link>
      <Link to = '/suggestarea'>
      <li> Suggest area </li>
      </Link>
      <Switch>
      
      <Route path= '/homepage' exact ></Route>
      <Route path = '/pricecomparison' exact component = {PriceComparison} ></Route>
      <Route path = '/suggestarea' exact component = {SuggestArea} ></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
