import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import CBC from '../Screens/CBC/';
import NHL from '../Screens/NHL/';
import Search from '../Screens/Search/';

const Router = TabNavigator({
  NHL: {screen: NHL},
  CBC: {screen: CBC},
  Search: {screen: Search},
})

export default Router;
