/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';



/********************************************************************************
 * ScrollView App
 *******************************************************************************/

class ScrollingWindow extends Component
{
  render()
  {
    return(
      <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Image source={require('./TestIcon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

/********************************************************************************
 * End of App
 *******************************************************************************/
AppRegistry.registerComponent('Akari', () => ScrollingWindow); // launcher component