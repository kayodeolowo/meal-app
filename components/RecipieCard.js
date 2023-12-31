import { View, Text, FlatList, Image , Pressable} from 'react-native'
import React from 'react'
import { colors, recipeList } from '../constant'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function RecipieCard() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList data={recipeList}
                renderItem={({ item }) => (
                    <Pressable 
                    onPress={()=> navigation.navigate("RecipeDetails", {item: item})}
                    style={{
                        backgroundColor: colors.COLOR_LIGHT,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 7,
                        borderRadius: 16,
                        marginVertical: 16,
                        alignItems: "center",
                        paddingHorizontal: 8,
                        paddingVertical: 26,
                    }}>
                        <Image source={item.image}
                            style={{ width: 150, height: 150, resizeMode: "center" }} />
                        <Text> {item.name}</Text>
                        <View style={{ flexDirection: "row", marginTop: 3, alignItems: "center" }}>
                            <Text>{item.time} </Text>
                            <Text>| </Text>
                            <Text> </Text>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ marginRight: 4 }}> {item.rating} </Text>
                                <FontAwesome
                                    name='star'
                                    size={16}
                                    color={colors.COLOR_PRIMARY} />
                            </View>
                        </View>
                    </Pressable>
                )}

                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between"
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}