import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Header = ({ headerText, headerIcon }) => {
    return (
        <View style={{flexDirection: "row",  alignItems: "center",}}>
            <Text style={{flex:1, fontSize:22, fontWeight: "600" }}>{headerText}</Text>
            <FontAwesome name={headerIcon} size={22} color="#f96163" />
        </View>
    )
}

export default Header