import React from 'react';
import {AppRegistry, StyleSheet, Text, View,Button} from 'react-native';

class HelloWorld extends React.Component {

  state = {
    message:'Connected to Server'
  }

  handleClick = (e)=>{
    console.log('clicked');
    this.setState({
      message:'Handle Updated'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World From React Native</Text>
        <Text style={styles.hello}>{this.state.message}</Text>
        <View style={styles.buttonPrimary}>
        <Button  title="Reload" onPress={this.handleClick}/>
        </View>

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
  buttonPrimary:{
    alignItems:'center',
    justifyContent:'center',
    // width:150
  }
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);