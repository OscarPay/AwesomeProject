import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    constructor(props){
        super(props);
        this.headerText = props.headerText
    }

    render() {
        const {viewStyle, textStyle} = styles;

        return (
            <View style={viewStyle}>
                <Text style={textStyle}>{this.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 20
    },
});

export default Header;

