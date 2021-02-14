import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Details from '../Details';
import Search from '../Search';
import Signin from '../Signin';
import Signup from '../Signup';
import Header from '../../templates/Header';

const Root = () => (
  <>
    <Switch>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path={['/', '/home']}>
        <Header>
          <Home />
        </Header>
      </Route>
      <Route exact path="/dashboard">
        <Header>
          <Dashboard />
        </Header>
      </Route>
      <Route exact path="/details/:placeId">
        <Header>
          <Details />
        </Header>
      </Route>
      <Route path="*">
        <Redirect to="/home" />
      </Route>
    </Switch>

    <Route path={['/details/:id/search', '/dashboard/search', '/home/search']}>
      <Search />
    </Route>

    <Route path={['/details/:id/signin', '/dashboard/signin', '/home/signin']}>
      <Signin />
    </Route>

    <Route path={['/details/:id/signup', '/dashboard/signup', '/home/signup']}>
      <Signup />
    </Route>
  </>
);
export default Root;
