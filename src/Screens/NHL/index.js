import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class NHL extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.homeText}>
          NHL
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  homeText: {
    fontSize: 26
  }
})
