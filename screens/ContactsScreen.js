import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native';

export default class ContactsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Contact who recycle your products</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})