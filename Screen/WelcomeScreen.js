import React from 'react'
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: "center"}}>
        <Image source={require('../assets/images/welcome1.png')} />

        <Text style={{color:"#f96163", fontSize: 24, fontWeight:"bold"}} > 20k+ Premium Receipeies </Text>
        <Text style={{ fontSize: 44, fontWeight:"bold", marginTop:44, marginBottom:40}} > Cook Like a Chef </Text>

        <TouchableOpacity onPress={()=> navigation.navigate("RecipieList")}  style={{backgroundColor:"#f96163", borderRadius:15, paddingVertical:18, width: "80%", alignItems:'center'}}>
          <Text style={{ fontSize: 20, color:"white", fontWeight:"bold" }}>  Let's Go </Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default WelcomeScreen


const styles = StyleSheet.create({})