import React from "react";
import { BrowserRouter as Router, Link, Route, useRouteMatch } from 'react-router-dom'

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component based routing for react',
    resources : [
      {
        name: 'url parameters',
        id: 'url-parameters',
        description: 'URL parameters are parameters whose values are set dynamically by page',
        //url: ''
      },
      {
        name: 'Programmitically navigate',
        id: 'programmitically-navigate',
        description: 'When building an app with react ...',
        //url: ''
      }
    ]
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JS library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle events',
        id: 'react-lifecycle',
        description: 'Component didMount, didUpdate...'
      },
      {
        name: 'React AHA moments',
        id: 'react-aha',
        description: 'A collection of AHA moments'
      }
    ]
  },
  {
    name: 'Functional Prog',
    id: 'functional-prog',
    description: 'It is a paradigm-a style of programming ',
    resources: [
      {
        name: 'Imperative vs desclarative',
        id: 'imperative-declarative',
        description: 'A guide to understanding the differnce'
      },
      {
        name: 'Building Interfaces',
        id: 'fn-composition',
        description: 'A guide to building user interfaces using fn composition'
      }
    ]
  }
];

function Topics(){
  const { url } = useRouteMatch()
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map( ({ name, id }) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Home(){
  return <h1>Home</h1>
}

class App extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to = '/'> Home</Link></li>
            <li><Link to = '/topics'>Topics</Link></li>
          </ul>
          <hr />
         
          <Route path='/topics'>
            <Topics />
          </Route> 
        
        </div>
        </Router> 
    )
  }
}

export default App;
