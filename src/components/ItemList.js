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
      <View style={{flex:1, flexDirection: 'row', marginBottom: 3}}>
        <Image style={{width:80, height:80}}
          source={{ uri: item.image }}
        />
        <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={{fontSize:18, marginBottom: 15}}>
            {item.book_title}
          </Text>
          <Text style={{fontSize:16}}>
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
    backgroundColor: '#F5FCFF',
  }
});