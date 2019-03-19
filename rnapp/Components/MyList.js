import React, {Component, PureComponent} from "react";
import {View, Text, Image, FlatList, StyleSheet} from "react-native";
import {Avatar, Button, Card, Title, Paragraph} from "react-native-paper";
class MyList extends PureComponent {
  state = {
    data: [],
    page: 1,
    isLoading: false
  };

  _keyExtractor = (item, index) => {
    return index.toString();
  };

  _endReached = async () => {
    if (this.state.isLoading) {
      let q = await this._fetchMovies(this.state.page);
      this.setState(prevState => ({
        data: prevState.data.concat(q)
      }));
      console.log("end reached", q);
    }
  };

  async _fetchMovies(page) {
    try {
      let response = await fetch("http://www.mocky.io/v2/5c8e1d4f30000031001b0d35");
      let data = await response.json();
      console.log("data", data);
      return data.results;
    } catch (error) {
      console.log("error", error);
    }
  }

  async componentWillMount() {
    let q = await this._fetchMovies(this.state.page);
    console.log("q", q);
    this.setState(prevState => ({
      data: prevState.data.concat(q)
    }));
  }

  // https://picsum.photos/700
  _renderItem = ({item}) => {
    //  let source_img = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    return (
      <View style={{margin: 8}}>
        <Card>
          <Card.Content>
            <View style={styles.container}>
              {/* <View style={styles.left}>
                <Text>asdsad</Text>
              </View> */}
              <View style={styles.right}>
                <Title>{item.original_title}</Title>
                <Text style={{color: "gray"}}>{item.overview}</Text>
                <Text style={{fontSize: 16, color: "green"}}>{item.vote_average}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      </View>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          bounces={false}
          onEndReached={this._endReached}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  }
});

export default MyList;
