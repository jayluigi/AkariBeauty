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
                <Text style = { [styles.bigBold, {color: 'white'}] } >Current Scene: { this.props.title }</Text>

                <TouchableHighlight style = {styles.button} onPress = { this.props.onForward } underlayColor='pink'>
                    <Text style = { styles.bigBold } >Tap me to go forward</Text>
                </TouchableHighlight>
                
                <TouchableHighlight style = {styles.button} onPress = { this.props.onBack } underlayColor='pink'>
                    <Text style = { styles.bigBold } >Tap me to go back</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    defaultBackground: {
        flex: 1,
        backgroundColor: "#006699",
        alignItems: 'center',
    },

    bigBold: {
        color: "#444444",
        fontWeight: 'bold',
        fontSize: 20,
    },

    button: {
        backgroundColor: "pink",
        width: 300,
        margin: 20,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5
    }
});