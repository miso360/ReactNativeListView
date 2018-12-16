import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

export default class ItemList extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: []
    }
  }

  renderItem = ({item}) => {
    return (
      <View>
        <Image style={{width:100, height:100}}
          source={{ uri: item.image }}
        />
        <View>
          <Text>
            {item.book_title}
          </Text>
          <Text>
            {item.author}
          </Text>
        </View>
      </View>
    )
  }

  componentDidMount() {
    console.log('### componentDidMount');
    const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'

    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        
        this.setState({
          dataSource: responseJson.book_array
        })
      })
  }

  render() {
    return (
      <View style={style.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});