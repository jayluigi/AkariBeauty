import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component
{
    static get defaultProps()
    {
        return
        {
            title: "MyScene"
        };
    }

    render()
    {
        return
        (
            <Veiw>
                <Text>Hi! My Name is {this.props.title}.</Text>
            </View>
        )
    }

}