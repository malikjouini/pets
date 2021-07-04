import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Route, Switch, Link } from 'react-router-dom';
import SideBarL from './components/SideBarL';
function App() {


  return (

    <Switch>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/Home" component={Home} />
      </div>
    </Switch>

  );
}

export default App;
