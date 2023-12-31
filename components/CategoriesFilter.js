import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { categories, colors } from '../constant'

export default function CategoriesFilter() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((category, index)=>{
                return <View style={{
                    backgroundColor: index === 0 ? colors.COLOR_PRIMARY: colors.COLOR_GREEN,
                     marginRight:36, 
                     borderRadius:8,
                     paddingHorizontal:16,
                     paddingVertical:10,
                     shadowColor: "#000",
                     shadowOffset: { width: 0, height: 4 },
                     shadowOpacity: 0.1,
                     shadowRadius: 7,
                     marginVertical: 16,
                     
                     }}>
                    {/* <Text style={{color: index ===0 && colors.COLOR_LIGHT}}>{category.category} </Text> */}
                    <Text style={{color: colors.COLOR_LIGHT}}>{category.category} </Text>
                    </View>
            })
        }
      </ScrollView>
    </View>
  )
}