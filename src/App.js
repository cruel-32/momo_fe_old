import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from 'pages/home';
import Counter from 'pages/counter';
import SuperMarket from 'pages/super_market';

// https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=korean'

class App extends React.Component {
  render(){
    return <Router>
      <div className="App">
        <div>
          <Link to={`/`}>Home</Link>
          <Link to={`/SuperMarket/1000?items=2`}>Super Market</Link>
          <Link to={`/Counter/2000?count=10`}>Counter</Link>

          <Route exact path="/" component={Home}/>
          <Route exact path="/SuperMarket/:id" component={SuperMarket}/>
          <Route path={["/Counter/:id", "/Counter"]} component={Counter} />

        </div>
      </div>
    </Router>
  }
}
export default App;
