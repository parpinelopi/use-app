
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PriceComparison from './pages/PriceComparison';
import SuggestArea from './pages/SuggestArea';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar /> 
        <Switch>
          <Route path='/homepage' exact component={Homepage} ></Route>
          <Route path='/pricecomparison' exact component={PriceComparison} ></Route>
          <Route path='/suggestarea' exact component={SuggestArea} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
