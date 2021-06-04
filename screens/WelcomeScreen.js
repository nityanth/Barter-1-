import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId:'',
            password:''
        }
    }
    userLogin=(emailId,password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
          return Alert.alert("Successfully Login")
      })
      .catch((error)=> { var errorCode = error.code; 
        var errorMessage = error.message; 
        return Alert.alert(errorMessage) })
    }
    render(){
        return(
            <View style= {styles.container}>
                <View style= {styles.profileContainer}>
<Text style= {styles.title}>
    Barter System
</Text>
                </View>
                <View style = {styles.buttonContainer}>
<TextInput
        style={styles.loginBox}
        onChangeText = {(text)=> {
            this.setState({emailId:text})
        }}
        placeholder="Email Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.loginBox}
        onChangeText = {(text)=> {
            this.setState({password:text})
        }}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style = {[styles.button,{marginTop: 20,marginBottom:20}]}
      onPress = {()=>{this.userLogin(this.state.emailId,this.state.password)}}>
          <Text style = {styles.buttonText}>Login</Text></TouchableOpacity>
                </View>
            </View>
        )
    
        
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'yellow'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })
  