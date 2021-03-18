import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {store} from './config';

import {Home, Success, Test} from './pages';
import {NavbarComponent} from './components';

const App = () => {
  console.log(process.env.REACT_APP_API_URL)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarComponent />
          <main>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/success" component={Success} exact/>
              <Route path="/test" component={Test} exact />
            </Switch>
          </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
