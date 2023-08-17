import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'

export default function RecipieScreenList() {
  return (
    <SafeAreaView style={{flex:1, marginHorizontal:17 }}>
        {/* header  */}
      <Header headerText={"Hello,  Kay"} headerIcon={"bell-o"}/>
     {/* search filter */}
      <SearchFilter icon="search" placeholder="Search Recipes "/>

      <View>
        <Text style={{fontSize:22, fontWeight: "bold"}}> Categories </Text>
        <CategoriesFilter/>
      </View>
   
    </SafeAreaView>
  )
}