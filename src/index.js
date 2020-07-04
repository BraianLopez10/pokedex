import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout } from './components/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './components/home'
import { PokemonStats } from './components/pokemon-stats'
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => {
        return <Layout >
          <Home {...props}></Home>
        </Layout>
      }}>
      </Route>
      <Route path="/pokemon" render={(props) => {
        return <Layout >
          <PokemonStats {...props} />
        </Layout>
      }}>

      </Route>
    </Switch>
  </BrowserRouter >
  ,
  document.getElementById('root')
);

