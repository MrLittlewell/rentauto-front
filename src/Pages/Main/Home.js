import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../containers/Header';
import CategoryMenu from '../../components/CategoryMenu';
import MainInfo from '../../containers/MainInfo';
import { FirstCategory } from '../FirstCategory';
import {
  AppWraper,
} from './styled';


export class Home extends Component {
  render() {

    return (
      <AppWraper>
        <Header />
        <CategoryMenu />
        <Switch>
          <Route exact path="/">
            <MainInfo />
          </Route>
          <Route path="/category-1">
            <FirstCategory />
          </Route>
          <Route path="/category-2">
            <p>2</p>
          </Route>
          <Route path="/category-3">
            <p>3</p>
          </Route>
          <Route path="/category-4">
            <p>4</p>
          </Route>
          <Route path="/category-5">
            <p>5</p>
          </Route>
        </Switch>
      </AppWraper>
    )
  }
}

Home.propTypes = {}
