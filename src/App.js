import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home';
import Counter from './pages/counter';
import SuperMarket from './pages/super_market';
// import DevTools from 'mobx-react-devtools';
// import logo from 'assets/logo.svg';

import 'App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div>
          <Link to={`/`}>Home</Link>
          <Link to={`/SuperMarket/1000?items=2`}>Super Market</Link>
          <Link to={`/Counter/2000?count=10`}>Counter</Link>

          {/* {process.env.NODE_ENV === 'development' && <DevTools />} */}

          <Route exact path="/" component={Home}/>
          <Route exact path="/SuperMarket/:id" component={SuperMarket}/>
          <Route exact path="/Counter/:id" component={Counter}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
