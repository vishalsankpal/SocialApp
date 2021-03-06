import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as firebase  from 'firebase';
export default class RegisterScreen extends Component {
    state = {
        name:"",
        email : '',
        password : '',
        errorMessage: null
    }
    handlerSignup = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName:this.state.name
                })
            })
            .catch(error =>this.setState({errorMessage:error.message}))
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>
                    {`Hello!\nsign up to get started`} 
                </Text>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput style={styles.input} autoCapitalize="none" 
                            onChangeText={text=>this.setState({name:text})}
                            value={this.state.name}
                        />
                    </View>
                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input} autoCapitalize="none" 
                            onChangeText={text=>this.setState({email:text})}
                            value={this.state.email}
                        />
                    </View>
                    <View style={{marginTop:32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} autoCapitalize="none" secureTextEntry
                            onChangeText={text=>this.setState({password:text})}
                            value={this.state.password}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handlerSignup}>
                    <Text style={{color:'#fff',fontWeight:'500'}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:"center",marginTop:32}}>
                    <Text style={{color:'#414959',fontSize:13}}>
                        New to SocialApp? <Text style={{fontWeight:"500",color:'#E9446A'}}>Login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    greeting:{
        marginTop:32,
        fontSize:18,
        fontWeight:'400',
        textAlign:'center'
    },
    errorMessage:{
        height:72,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:30
    },
    error:{
        color:'#e9446a',
        fontSize:13,
        fontWeight:'600',
        textAlign:'center'
    },
    form:{
        marginBottom:48,
        marginHorizontal:30
    },
    inputTitle:{
        color:"#8a8f9e",
        fontSize:10,
        textTransform:'uppercase'
    },
    input:{
        borderBottomColor:'#8a8f9e',
        borderBottomWidth:StyleSheet.hairlineWidth,
        height:40,
        fontSize:15,
        color:"#161F3D"
    },
    button:{
        marginHorizontal:30,
        backgroundColor:'#E9446A',
        borderRadius:4,
        height:52,
        alignItems:'center',
        justifyContent:'center'
    }
})
