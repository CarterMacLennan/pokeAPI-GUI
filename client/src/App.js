import './styles/styles.css';
import Navigation from './navigation'
import LandingPage from './landingPage';
import Auth from './auth';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={Auth} exact />
      </Switch>
    </div>
  );
}