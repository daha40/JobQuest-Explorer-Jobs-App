import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFatch from '../../../Hook/useFatch'

const Popularjobs = () => {
  const router = useRouter();
  const {data , isLoading , error } = useFatch('search', {
    query: "React native devolper",
    num_pages: 1,
  }) 


  const [selectedJob, setSelectedJob] = useState();


  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity onPress={(item) => {
          router.push(`/search/${item.Popularjobs}`)
        }}>
          <Text style={styles.headerBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size='large' color={COLORS.primary} />
          ) : error ? (
            <Text>Somthing is wrong </Text>
          ) : (
            <FlatList 
              data={data}
              renderItem={({item}) => (
                <PopularJobCard 
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              contentContainerStyle={{columnGap:SIZES.medium}}
              horizontal
            />
          )}
      </View>
    </View>
  )
}

export default Popularjobs