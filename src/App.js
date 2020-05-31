import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import store from './store';
import { Provide, Provider } from "react-redux";
import Multiply from "./Multiply";
function App() {


  const routes = [
    {
      path: '/',
      exact: true,
      component: () => <Home />
    },
    {
      path: '/add',
      exact: true,
      component: () => <Add />
    },
    {
      path: '/multiply',
      exact: true,
      component: () => <Multiply />
    }
  ]

  return (
    <div>

      <Provider store={store}>
        <BrowserRouter>

          <ul>
            <li>
              <NavLink to='/'>Home </NavLink>
            </li>
            <li>
              <NavLink to='/add'>Add </NavLink>

            </li>
            <li>
              <NavLink to='/multiply'>Multiply </NavLink>

            </li>
          </ul>


          <Switch>

            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.component />}
              />
            ))}


          </Switch>


        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
