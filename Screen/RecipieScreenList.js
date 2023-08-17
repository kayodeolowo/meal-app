import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipieCard from '../components/RecipieCard'

export default function RecipieScreenList() {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 17 }}>
      {/* header  */}
      <Header headerText={"Hello,  Kay"} headerIcon={"bell-o"} />
      {/* search filter */}
      <SearchFilter icon="search" placeholder="Search Recipes " />

      {/* categories */}
      <View style={{ marginTop: 22  }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}> Categories </Text>
        <CategoriesFilter />
      </View>

      {/* list */}
      <View style={{ marginTop: 22, flex:1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}> Popular Recipes </Text>
        <RecipieCard  />
      </View>

    </SafeAreaView>
  )
}