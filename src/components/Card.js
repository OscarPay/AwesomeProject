import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Card extends Component {
    constructor(props){
        super(props);
        this.children = props.children
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {this.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, headerText: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

export default Card;