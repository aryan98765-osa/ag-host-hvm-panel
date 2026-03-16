import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Main Dashboard</h1>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
