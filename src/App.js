import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Product from './components/Product/Product';
import Products from './components/Products/Products';
import Registration from './components/Registration/Registration';
import DashBoard from './components/DashBoard/DashBoard';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/product/:id">
            <Product/>
          </Route>
          <Route path="/addproduct">
            <AddProduct/>
          </Route>
          <Route path="/placeorder/:id">
            <PlaceOrder/>
          </Route>
          <Route path="/dashboard">
            <DashBoard/>
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/registration">
            <Registration/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
