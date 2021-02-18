import Navbar from './components/navbar'
import Products from './components/products'
import Cart from './components/cart';
import Product from './components/product'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/:product_id' component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
