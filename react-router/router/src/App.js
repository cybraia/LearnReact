import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import ContactUs from './pages/contact';

const App = () => {
	return(
		<Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
			<Switch>
				<Route path="/about" component={About}/>
				<Route path="/contact" component = {ContactUs}/>
				<Route path="/" component = {Home}/>
			</Switch>
		</Router>
	)
}	

export default App;
