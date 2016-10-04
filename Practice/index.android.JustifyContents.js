/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
} from 'react-native';



/********************************************************************************
 * Jutify Content App
 *******************************************************************************/

class JustifyContentBasics extends Component
{
  render()
  {
    return(
      // flex-start, center, flex-end, space-around, space-between
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style = 
      { { 
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: 20
      } }>
        <View style = { { width: 80, height: 100, backgroundColor: 'powderblue' } } />
        <View style={{ width: 80, height: 100, backgroundColor: 'skyblue' }} />
        <View style={{ width: 80, height: 100, backgroundColor: 'steelblue' }} />
      </View>
    )
  }
}

/********************************************************************************
 * End of App
 *******************************************************************************/



const styles = StyleSheet.create({
  item: 
  {
  },
});

AppRegistry.registerComponent('Akari', () => JustifyContentBasics); // launcher component