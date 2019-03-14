import React from 'react';
import {AppRegistry, StyleSheet, Text, View,Button} from 'react-native';

function TextView(props){
  return(
    <Text style={styles.hello}>{props.children}</Text>
  )
}

class Landing extends React.Component {

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
        <TextView>Hello, World From React Native</TextView>
        <TextView>Landing Screen</TextView>
        <TextView>{this.state.message}</TextView>
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
  }
});

export default Landing;