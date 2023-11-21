import { View, Text, TouchableOpacity , FlatList, TextInput, Image} from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const JobsTypes = ['Full-time', 'Part-time' , 'Contractor'];

const Welcome = ({searchTerm ,setSearchTerm ,handLeClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
  <View>
    <View style={styles.container}>
        <Text style={styles.userName}>Hello Abderahmane 👋</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job!</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}> 
          <TextInput 
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Search Jobs, Skills, or Company'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handLeClick}>
          <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
        data={JobsTypes}
        renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType , item)}
              onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType , item)}>{item}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
      </View>

    </View>
  </View>
  )
}

export default Welcome