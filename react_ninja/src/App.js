import './index.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './create';
import PostDetails from './Blogdetails';


function App() {
  // const title = 'My blog';
  // const likes = 50;
  //const person = {name: 'Krishna', age: 19} //gives error

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className = "content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/posts/:userId">
            <PostDetails />
          </Route>
        </Switch>
      </div>  
    </div>
    </Router>
  );
  }


export default App;
