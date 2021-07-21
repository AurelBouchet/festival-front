import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/commons/Navbar';
import Home from './components/views/Home';
import Theater from './components/views/Theater';
import Movie from './components/views/Movie';
import Admin from './components/views/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movie />
          </Route>
          <Route exact path="/theaters">
            <Theater />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
