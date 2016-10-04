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



/********************************************************************************
 * Youtube Channel Playlist App
 *******************************************************************************/
class Thumbnail extends Component {
  render() {
      let pic = {
      uri: 'https://i.ytimg.com/vi/yS2mIEMHVVY/default.jpg'
    };
    return (
      <Image source={pic} style={{width: 120, height: 90}}/>
    );
  }
}

class VideoTitle extends Component {
  render() {
    return (
      <Text style={styles.title}>Title: {this.props.title}!</Text>
    );
  }
}

class Video extends Component {
  render() {
    return (
      <View style={styles.video}>
        <Thumbnail />
        <VideoTitle title="Star Wars makeup" />
      </View>
    )
  }
}

class Playlist extends Component{
  render() {
    return (
      <View>
        <Video />
        <Video />
        <Video />          
      </View>
    );
  }
}
/********************************************************************************
 * End of App
 *******************************************************************************/



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