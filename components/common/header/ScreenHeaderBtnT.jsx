import { View, Text, TouchableOpacity, Image, Linking} from 'react-native'
import React from 'react'
import styles from './screenheader.style'

const ScreenHeaderBtnT = ({iconUrl,dimension }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => Linking.openURL('https://www.linkedin.com/in/abderahmane-kateb-822143297/')}>
      <Image 
      source={iconUrl}
      resizeMode='cover'
      style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtnT