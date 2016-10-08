/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ListView,
  Image,
  View
} from 'react-native';



/********************************************************************************
 * ListView basics App
 *******************************************************************************/

class ListViewBasics extends Component
{
  constructor(props)
  {
    super(props);
    const data = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
    this.state =
    {
      dataSource: data.cloneWithRows
      (
        [
          "John", "Joel", "James", "Jimmy", 'Jackson', 'Jillian', 'Julie', 'Devin',
          "John", "Joel", "James", "Jimmy", 'Jackson', 'Jillian', 'Julie', 'Devin',
          "John", "Joel", "James", "Jimmy", 'Jackson', 'Jillian', 'Julie', 'Devin',
          "John", "Joel", "James", "Jimmy", 'Jackson', 'Jillian', 'Julie', 'Devin'
        ]
      )
    }
  }

  render()
  {
    return(
      <View style = {{paddingTop: 30}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

/********************************************************************************
 * End of App
 *******************************************************************************/
AppRegistry.registerComponent('Akari', () => ListViewBasics); // launcher component