import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'
export default class HomeScreen extends Component {
    state = {
        email: "",
        displayName:""
    }
    componentDidMount(){
        const {email,displayName} = firebase.auth().currentUser
        this.setState({email,displayName})
    }
    signOutUser = () => {
        firebase.auth().signOut()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Home Screen </Text>
                <Text>Welcome {this.state.email}</Text>
                <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                    <Text style={{fontWeight:'500'}}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
