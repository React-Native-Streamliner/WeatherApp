import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { Feather } from '@expo/vector-icons'
import RowText from "../components/RowText"

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message} = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black"/>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText 
          description={'High: 8'}
          message={'Low: 6'}
          containerStyle={highLowWrapper}
          descriptionStyle={highLow}
          messageStyle={highLow}
        />
        <RowText 
          description={'Its sunny'}
          message={'Its perfect t-shirt weather'}
          containerStyle={bodyWrapper}
          descriptionStyle={description}
          messageStyle={message}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper : {
    flexDirection: 'row'
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather