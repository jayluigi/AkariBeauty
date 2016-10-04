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
 * Flex Basics App
 *******************************************************************************/

class FlexDimensionsBasics extends Component
{
  render()
  {
    return(
      <View style = { { flex: 1 } }>
        <View style = { { flex: 1, backgroundColor: 'powderblue' } } />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
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

AppRegistry.registerComponent('Akari', () => FlexDimensionsBasics); // launcher component