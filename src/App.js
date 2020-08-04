import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Scholarships from './components/layouts/Scholarships';
import Footer from './components/layouts/Footer';
import Banner from './components/layouts/Banner';
import Sliders from './components/layouts/Sliders';
import Carousels from './components/layouts/Carousels';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/pages/Books';
import College from './components/pages/College';
import Hostel from './components/pages/Hostel';
import Epass from './components/pages/Epass';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Navbar} />
        <Route exact path='/' component={Carousels} />
        <Route exact path='/' component={Banner} />
        <Route exact path='/' component={Scholarships} />
        <div className='container'>
          <Switch>
            <Route exact path='/dhyanasagar' component={Books} />
            <Route exact path='/sampurna-vidya' component={College} />
            <Route exact path='/faac-fc' component={Hostel} />
            <Route exact path='/epass' component={Epass} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>

        <Route exact path='/' component={Sliders} />
        <Route exact path='/' component={Footer} />
      </Fragment>
    </Router>
  );
}

export default App;
