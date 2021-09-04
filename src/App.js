import { Switch, Route } from 'react-router-dom';

// views
import Home from './views/Home';
import NotFound from './views/NotFound';
import Dashboard from './views/Dashboard.js';

// components
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
