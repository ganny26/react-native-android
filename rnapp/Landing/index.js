import React from "react";
import {AppRegistry, StyleSheet, Text, View, Button} from "react-native";
import CodePush from "react-native-code-push";
function TextView(props) {
  return <Text style={styles.hello}>{props.children}</Text>;
}

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      message: "Connected to Server"
    };
  }

  componentDidMount() {
    this.codePushSync();
  }

  codePushSync = () => {
    this.setState({
      logs: ["Started at " + new Date().getTime()]
    });
    CodePush.sync(
      {
        updateDialog: true,
        installMode: CodePush.InstallMode.IMMEDIATE
      },
      status => {
        console.log("status", status);
        for (let key in CodePush.SyncStatus) {
          if (status === CodePush.SyncStatus[key]) {
            this.setState(prevState => ({
              logs: [...prevState.logs, key.replace(/_/g, " ")]
            }));
            break;
          }
        }
      }
    );
  };

  handleClick = e => {
    console.log("clicked");
    this.setState({
      message: "Handle Updated"
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TextView>Changes are pushed</TextView>
        <View style={styles.buttonPrimary}>
          <Button title="Reload" onPress={this.handleClick} />
          <TextView>{JSON.stringify(this.state.logs)}</TextView>
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    backgroundColor: "#4373c2",
    flex: 1,
    justifyContent: "center"
  },
  hello: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  buttonPrimary: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Landing;
