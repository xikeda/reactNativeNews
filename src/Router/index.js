import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import CBC from '../Screens/CBC/';
import NHL from '../Screens/NHL/';
import Search from '../Screens/Search/';

const Router = TabNavigator({
      NHl: { screen: NHL,
      navigationOptions: {
          swipeEnabled: true,
          animationEnabled: true,
          tabBarIcon: <Icon name="document" />
      } },
      CBC: { screen: CBC,
          navigationOptions: {
              swipeEnabled: true,
              animationEnabled: true,
              tabBarIcon: <Icon name="document" />
          } },
      Search: { screen: Search,
          navigationOptions: {
              swipeEnabled: true,
              animationEnabled: true,
              tabBarIcon: <Icon name="search" />
          } },
  })

export default Router;
