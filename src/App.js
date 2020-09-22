import React from 'react';

import './tailwind.css'
import AboutPage from './views/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';
import Home from './views/Home';
import Product from './views/Product';

function App() {
  return (
    <div className="bg-gray-100 relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/users/:id">
              <Product />
            </Route>
           
          </Switch>
        </div>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
