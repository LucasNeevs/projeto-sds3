import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Dashboard from 'pages/Dashboard/Dashboard';

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);

Routes.displayName = 'Routes';

export default Routes;