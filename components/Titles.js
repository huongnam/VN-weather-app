import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Titles = () => (
  <View style={title.container}>
    <Text style={title.text}>Weather App</Text>
    <Text style={title.sub_text}>Weather Statistics</Text>
  </View>
);

export default Titles;
const title = StyleSheet.create({
  container: {
    textAlign: 'center',
    paddingBottom: 20,
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 5,
    backgroundColor: 'pink',
  },
  sub_text: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
});