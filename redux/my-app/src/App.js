import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import { changeColor } from './features/theme';

function App() {
  return (
    <div className="App">
      <Profile />
      <Login />
      <changeColor />
    </div>

  );
}

export default App;
