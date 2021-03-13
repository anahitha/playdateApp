import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home';

export const AppStackNavigator = createStackNavigator({
    Home: {screen: HomeScreen, 
    navigationOptions: {headerShown: false}},
},{

    initialRouteName: 'Home'
})