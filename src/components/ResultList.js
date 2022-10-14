import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultList = ({ title, results, navigation }) => {
  if(!results.length) {
    return null
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
            )
        }}
      />
    </View>
  )
}

export default withNavigation(ResultList)

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  }
})