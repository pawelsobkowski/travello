import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Profile from '../Profile';
import Details from '../Details';
import Search from '../Search';
import Signin from '../Signin';
import Signup from '../Signup';
import Header from '../../templates/Header';
import MainTemplate from '../../templates/Main';
import BluredBackground from '../../templates/BluredBackground';

const Root = () => (
  <MainTemplate>
    <Switch>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route path="/dashboard">
        <Header>
          <Dashboard />
        </Header>
      </Route>
      <Route path="/details/:placeId">
        <Header>
          <Details />
        </Header>
      </Route>
      <Route path={['/', '/home']}>
        <Header>
          <Home />
        </Header>
      </Route>
    </Switch>

    <Route path={['/details/:placeId/search', '/dashboard/search', '/home/search']}>
      <BluredBackground>
        <Header variant="close">
          <Search />
        </Header>
      </BluredBackground>
    </Route>

    <Route path={['/details/:placeId/signin', '/dashboard/signin', '/home/signin']}>
      <BluredBackground>
        <Header variant="close">
          <Signin />
        </Header>
      </BluredBackground>
    </Route>

    <Route path={['/details/:placeId/signup', '/dashboard/signup', '/home/signup']}>
      <BluredBackground>
        <Header variant="close">
          <Signup />
        </Header>
      </BluredBackground>
    </Route>
  </MainTemplate>
);
export default Root;
