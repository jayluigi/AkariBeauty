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
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 80, height: 60}}/>
    );
  }
}

// class VideoTitle extends Component {
//   render() {
//     return (
//       <Text>Title: {this.props.title}!</Text>
//     );
//   }
// }

// class Playlist extends Component{
//   render() {
//     return (
//       <View style = {styles.container}>
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title01" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title02" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title03" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title04" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title05" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title06" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title07" />
//         <Thumbnail /> <VideoTitle style = {styles.instructions} title="Title08" />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fcd6ff',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#000000',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('Thumbnail', () => Thumbnail); // launcher component