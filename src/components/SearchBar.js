import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  }
})