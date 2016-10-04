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



/*********************************************************************************
 * Blinking text App
 ********************************************************************************/
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // Toggle state in constructor
    setInterval( () => {
      this.setState({showText: !this.state.showText});
    }, 600);
    
  }

  render()
  {
    let display = this.state.showText ? this.props.Text : '';
    return(
      <Text style={styles.video}>{display}</Text>
    );
  }
}

class BlinkApp extends Component
{
  render()
  {
    return(
      <View>
        <Blink Text = "Test Title 01" />
        <Blink Text = "Test Title 02" />
        <Blink Text = "Test Title 03" />
        <Blink Text = "Test Title 04" />
      </View>
    )
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

AppRegistry.registerComponent('Akari', () => BlinkApp); // launcher component