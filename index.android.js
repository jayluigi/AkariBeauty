/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View } from 'react-native';

import MyScene from "./MyScene";

/********************************************************************************
 * Navigation basics App
 *******************************************************************************/

var BasicConfig = Navigator.SceneConfigs.FloatFromLeft;

class NavigationApp extends Component{
  render(){
      return(
          <Navigator
              initialRoute = {{ title: "Start Screen", index: 0 }}
              configureScene = { (route, routeStack) => Object.assign( {}, BasicConfig, {
                springTension: 140,
                springFriction: 1,
              } ) }
              renderScene = {(route, navigator) => 
                  <MyScene 
                    title = {route.title}

                    // Function to call when a new scene should be displayed
                    onForward = { () => {
                      const nextIndex = route.index + 1;
                      navigator.push({
                        title: 'Scene ' + nextIndex,
                        index: nextIndex,
                      });
                    }}

                    // Function to call to go back to the previous scene
                    onBack = { () => {
                      if (route.index > 0) {
                        navigator.pop();
                      }
                    }}
                  />
              }
          />
      )
  }
}

AppRegistry.registerComponent('Akari', () => NavigationApp); // launcher component

/********************************************************************************
 * End of App
 *******************************************************************************/