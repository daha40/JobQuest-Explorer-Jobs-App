import { View, Text, SafeAreaView, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router'
import { COLORS, icons, SIZES, images } from '../constants'
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import ScreenHeaderBtnT from '../components/common/header/ScreenHeaderBtnT';

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen 
      options={{
        headerStyle:{backgroundColor:COLORS.lightWhite},
        headerShadowVisible:false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),
        headerRight: () => (
          <ScreenHeaderBtnT iconUrl={images.profile} dimension="100%"/>
        ),
        headerTitle:''
      }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1, padding:SIZES.medium}}> 
          <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handLeClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`)
            }
          }}

          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home