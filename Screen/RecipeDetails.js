import { View, Text, Image, Pressable,  } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RecipeDetails({navigation, route}) {

    const {item} = route.params;
    
    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <SafeAreaView style={{flexDirection:"row", marginHorizontal: 16 }}>
               <Pressable  style={{flex:1}} onPress={()=> navigation.goBack()}>
               <FontAwesome name='arrow-circle-left' size={34} color="white"  />
               </Pressable>
                <FontAwesome name='heart-o' size={32} color="white" />
            </SafeAreaView>
            <View style={{
                backgroundColor: "#fff",
                flex: 1, 
                marginTop: 240, 
                borderTopLeftRadius: 56,
                borderTopRightRadius: 56,
                alignItems: "center",
                paddingHorizontal:16,

            }}>

                <View style={{
                    // backgroundColor:"red",
                    height: 300,
                    width: 300,
                    position: "absolute",
                    top: -150,
                }}>

                    <Image source={item.image} style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain"
                    }} />

                </View>

                <Text style={{marginTop: 160, fontSize:28, fontWeight: "bold"}}> {item.name} </Text>
                <Text style={ {fontSize:20, marginVertical:16,}}> {item.description} </Text>


                <View style={{flexDirection:"row", justifyContent:"space-between", width:"100%" }}>
                        <View style={{backgroundColor: "rgba(135, 206, 235, 0.8)" ,
                         paddingHorizontal:16,
                         paddingVertical:26,
                          borderRadius:8, 
                          alignItems:"center"}}> 
                        <Text style={{fontSize:30}}> ⏰  </Text>
                        <Text style={{fontSize:20, fontWeight:"500" }}> {item.time} </Text>
                            
                        </View>

                        <View style={{backgroundColor: "rgba(135, 206, 0, 0.48)" ,
                         paddingHorizontal:16,
                         paddingVertical:26,
                          borderRadius:8, 
                          alignItems:"center"}}> 
                        <Text style={{fontSize:30}}>  ✍️  </Text>
                        <Text style={{fontSize:20, fontWeight:"500" }}> {item.difficulty} </Text>
                            
                        </View>

                        <View style={{backgroundColor: "orange" ,
                         paddingHorizontal:16,
                         paddingVertical:26,
                          borderRadius:8, 
                          alignItems:"center"}}> 
                        <Text style={{fontSize:30}}> 🔥  </Text>
                        <Text style={{fontSize:20, fontWeight:"500" }}> {item.calories} </Text>
                            
                        </View>
                </View>

                <View style={{alignSelf: 'flex-start'}}>

                </View>
            </View>
        </View>
    )
}