import './styles/styles.css';
import Navigation from './navigation'
import LandingPage from './landingPage';
import Login from './login';
import { Route, Switch } from 'react-router-dom';
import SignUp from './signUp';
import Favourites from './favourites';
import Footer from './footer';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/signup" component={SignUp} exact />
          <Route path="/favourites" component={Favourites} exact />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}