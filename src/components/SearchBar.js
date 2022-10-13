import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange , onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome style={styles.iconStyle} name='search'/>
      <TextInput 
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
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
    marginTop: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },

})