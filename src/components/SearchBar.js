import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' size={30}/>
      <TextInput style={styles.inputStyle} placeholder='Search'/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
})