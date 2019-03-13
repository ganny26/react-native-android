import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World From React Native</Text>
        <Text style={styles.hello}>Connected to Server</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor:'#ccc',
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontWeight:'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);