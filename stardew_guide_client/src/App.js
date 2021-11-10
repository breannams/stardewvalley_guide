
import './App.css';

import NavBar from "./components/Navbar"
import Router
 from './helpers/Router';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <br></br>
        <Router />
      </header>
    </div>
  );
}

export default App;
