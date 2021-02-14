import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

const Root = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Router>
      <Switch>
        <Route exact path="/" />
        <Route path="/dashboard" />
        <Route path="/profile" />
        <Route path="/details" />
      </Switch>
      {background && <Route path="/search" />}
      {background && <Route path="/signin" />}
      {background && <Route path="/signup" />}
    </Router>
  );
};

export default Root;
