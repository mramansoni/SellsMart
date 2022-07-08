import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';
import Checkout from './component/Checkout'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/product/:id' component={ProductDetail} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Redirect path='/' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
