import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFatch from '../../../Hook/useFatch'



const Nearbyjobs = () => {
  const router = useRouter();
  const {data , isLoading , error } = useFatch('search', {
    query: "React native devolper",
    num_pages: 1,
  }) 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={(item) => {
          router.push(`/search/${item.Nearbyjobs}`)
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
            data?.map((job)=>(
              <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}  
              />
            ))
          )}
      </View>
    </View>
  )
}

export default Nearbyjobs