
import {  Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Carts from './Components/Carts/Carts/Carts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import Logout from './Components/Logout/Logout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProductsHome from './Components/Products/ProductsHome';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/products'>
              <ProductsHome></ProductsHome>
            </PrivateRoute>
            <PrivateRoute path='/carts'>
              <Carts></Carts>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/logout'>
              <Logout></Logout>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
