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
 * Flex Direction App
 *******************************************************************************/

class FlexDirectionsBasics extends Component
{
  render()
  {
    return(
      // layout defaults to columns
      <View style = { { flex: 1, flexDirection: 'row' } }>
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

AppRegistry.registerComponent('Akari', () => FlexDirectionsBasics); // launcher component