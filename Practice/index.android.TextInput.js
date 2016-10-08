/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TextInput,
  View
} from 'react-native';



/********************************************************************************
 * Text input App
 *******************************************************************************/

class TextInput_TranslateToPizza extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {text: ""};
  }

  render()
  {
    return(
      <View style = {{ padding: 10 }} >
        <TextInput
          style = {{height: 40}}
          placeholder = "Type here to translate!"
          onChangeText = { (text) => this.setState({text}) }
        />
        <Text style = {{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && 'pizza').join(' ')}
        </Text>
      </View>
    );
  }
}

/********************************************************************************
 * End of App
 *******************************************************************************/

AppRegistry.registerComponent('Akari', () => TextInput_TranslateToPizza); // launcher component