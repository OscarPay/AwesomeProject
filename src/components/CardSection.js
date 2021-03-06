import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class CardSection extends Component {
    constructor(props){
        super(props);
        this.children = props.children;
    }

    render() {
        return(
            <View style={styles.containerStyle}>
                {this.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
});

export default CardSection;