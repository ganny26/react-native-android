import React,{Component,useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

function MyButton(props){
  return(
    <TouchableOpacity activeOpacity={1} style={styles.buttonPrimary}>
        <Text>{props.children}</Text>
    </TouchableOpacity>
  )
}

class Events extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Events Screen From React Native</Text>
        <MyButton>Navigate</MyButton>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },
  hello: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonPrimary: {
    borderWidth:1,
    padding:10,
    width:100,
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Events