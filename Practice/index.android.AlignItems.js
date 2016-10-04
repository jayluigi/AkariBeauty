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
 * Align Items App
 *******************************************************************************/

class AlignItemsBasics extends Component
{
  render()
  {
    return(
      // if primary direction is column (e.g. flexDirection: 'column'), the secondary
      // direction alignment is set with alignItems.
      // OPTIONS: flex-start, center, flex-end, stretch
      <View style = 
      { { 
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center'
      } }>
        <View style = { styles.item } />
        <View style = { [ styles.item, {backgroundColor: 'powderblue'} ] } />
        <View style = { [ styles.item, {backgroundColor:  'skyblue' } ] } />
        <View style = { [ styles.item, {backgroundColor:  'steelblue' } ] } />
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
    width: 80,
    height: 80,
    backgroundColor: 'red',
    margin: 20
  },
});

AppRegistry.registerComponent('Akari', () => AlignItemsBasics); // launcher component