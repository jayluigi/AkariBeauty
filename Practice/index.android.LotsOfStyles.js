/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';



/********************************************************************************
 * Lots of styles App
 *******************************************************************************/

class LotsOfStyles extends Component
{
  render()
  {
    return(
      <View>
        <Text style = {styles.red}>just red</Text>
        <Text style = {styles.bigblue}>big fat blue</Text>
        <Text style = {[styles.bigblue, styles.red]}>big and fat and blue, but RED</Text>
        <Text style = {[styles.red, styles.bigblue]}>red, then big blue applied</Text>
      </View>
    );
  }
}

/********************************************************************************
 * End of App
 *******************************************************************************/


const styles = StyleSheet.create({
  video: 
  {
    margin: 10,
    alignItems: 'center',
  },
  title: 
  {
    margin: 10,
  },
  bigblue:
  {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 28,
  },
  red:
  {
    color: 'red',
  },
});

AppRegistry.registerComponent('Akari', () => LotsOfStyles); // launcher component