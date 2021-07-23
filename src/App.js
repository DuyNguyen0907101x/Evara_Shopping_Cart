import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Shopping from "./component/Shopping";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/shopping' />
          </Route>
          <Route exact path='/shopping'>
            <Shopping />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
