import {useState , useEffect} from 'react';
import './App.css'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import HomeScreen from './component/homeScreen/HomeScreen'
import ProductScreen from './component/productScreen/ProductScreen';
import CartScreen from './component/cartScreen/CartScreen';
import Navbar from './component/navbar/Navbar'
import Sidedrawer from './component/sidedrawer/Sidedrawer';
import Backdrop from './component/backdrop/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router>
    
      <Navbar setSideToggle = {setSideToggle}/>
      <Sidedrawer show= {sideToggle} setSideToggle = {setSideToggle} />
      <Backdrop show= {sideToggle} setSideToggle = {setSideToggle} />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path='/product/:id' component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
      </Switch>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}

    
    </Router>
  );
}

export default App;
