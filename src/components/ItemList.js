import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';

export default class ItemList extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }

  renderItem = ({item}) => {
    return (
      <View style={{flex:1, flexDirection: 'row', marginBottom: 3}}>
        <Image style={{width:80, height:80, margitn:5}}
          source={{ uri: item.image }}
        />
        <View style={{flex:1, justifyContent: 'center', marginLeft: 15}}>
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

  renderSeparator = () => {
    return (
      <View
        style={{ height:1, width: '100%', backgroundColor: 'black'}}>
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
          dataSource: responseJson.book_array,
          isLoading:false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {
    return (
      this.state.isLoading
      ?
      <View style={{ flex:1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#330066" animating />
      </View>
      :
      <View style={style.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeparator}
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