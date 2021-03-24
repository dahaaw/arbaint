import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {Home, Test, Profile} from './pages';
import {Layouts} from './components';
import {setLogged} from './redux/reducer/auth/auth.action'


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cookies = new Cookies();
    const authed = () => {
          if(cookies.get('token') === undefined){
              dispatch(setLogged(false));
          }else{
              dispatch(setLogged(true));
          }
      }
      authed()
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layouts>
        <main>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/profile" component={Profile} exact />
            <Route path="/test" component={Test} />
          </Switch>
        </main>
      </Layouts>
    </BrowserRouter>
  );
}

export default App;
