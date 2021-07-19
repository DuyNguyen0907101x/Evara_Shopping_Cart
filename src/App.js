import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Header from '../src/shared/Header';
import Footer from '../src/shared/Footer';
import Shopping from '../src/component/Shopping';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/shopping' />
          </Route>
          <Route exact path='/shopping'>
            <Shopping />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
