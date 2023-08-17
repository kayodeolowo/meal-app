import { View, Text, Image, Pressable, ScrollView, } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RecipeDetails({ navigation, route }) {

    const { item } = route.params;

    return (
        <View style={{ backgroundColor: item.color, flex: 1 }}>
            <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
                <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                    <FontAwesome name='arrow-circle-left' size={34} color="white" />
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
                paddingHorizontal: 16,

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

                <Text style={{ marginTop: 160, fontSize: 28, fontWeight: "bold" }}> {item.name} </Text>

                <View style={{ flex: 1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ fontSize: 20, marginVertical: 16, }}> {item.description} </Text>


                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{
                                backgroundColor: "rgba(135, 206, 235, 0.8)",
                                paddingVertical: 26,
                                borderRadius: 8,
                                alignItems: "center",
                                width:100
                            }}>
                                <Text style={{ fontSize: 30 }}> ⏰  </Text>
                                <Text style={{ fontSize: 20, fontWeight: "500" }}> {item.time} </Text>

                            </View>

                            <View style={{
                                backgroundColor: "rgba(135, 206, 0, 0.48)",
                                paddingVertical: 26,
                                borderRadius: 8,
                                alignItems: "center",
                                width:100
                            }}>
                                <Text style={{ fontSize: 30 }}>  ✍️  </Text>
                                <Text style={{ fontSize: 20, fontWeight: "500" }}> {item.difficulty} </Text>

                            </View>

                            <View style={{
                                backgroundColor: "orange",
                                paddingVertical: 26,
                                borderRadius: 8,
                                alignItems: "center",
                                width:100
                            }}>
                                <Text style={{ fontSize: 30 }}> 🔥  </Text>
                                <Text style={{ fontSize: 20, fontWeight: "500" }}> {item.calories} </Text>

                            </View>
                        </View>

                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6, }}> Ingredients:  </Text>
                            {item.ingredients.map((ingredients) => {
                                return (
                                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 4 }}>
                                        <View style={{
                                            backgroundColor: "red",
                                            height: 10,
                                            width: 10,
                                            borderRadius: 5
                                        }}>

                                        </View>
                                        <Text style={{ fontSize: 22, fontWeight: "400", marginLeft: 6 }}> {ingredients} </Text>
                                    </View>
                                )
                            })}
                        </View>


                        <View style={{ alignSelf: 'flex-start', marginVertical: 22 }}>
                            <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 6, }}> Steps:  </Text>
                            {item.steps.map((step, index) => {
                                return ( 
                                        <Text style={{ fontSize: 18,   marginVertical:6 }}>  {`${index + 1 }) ${step}`} </Text>
                                    
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}