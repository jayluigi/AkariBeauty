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
        <Video />
        <Video />               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
  }
});

AppRegistry.registerComponent('Akari', () => Playlist); // launcher component