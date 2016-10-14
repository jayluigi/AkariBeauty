import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class MyScene extends Component
{
    static PropTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render()
    {
        return(
            <View style = { styles.defaultBackground }>
                <Text style = { styles.bigBold } >Current Scene: { this.props.title }</Text>

                <TouchableHighlight onPress = { this.props.onForward } underlayColor='transparent'>
                    <Text style = { styles.bigBold } >Tap me to go forward</Text>
                </TouchableHighlight>
                
                <TouchableHighlight onPress = { this.props.onBack } underlayColor='transparent'>
                    <Text style = { styles.bigBold } >Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    defaultBackground: {
        flex: 1,
        backgroundColor: "#006699"
    },

    bigBold: {
        color: "#EEEEEE",
        fontWeight: 'bold',
        fontSize: 20,
        padding: 20,
    },
});