import React,{ Component } from 'react';
import {TabBarIOS, Text} from 'react-native';
import ItemList from './ItemList';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'itemList'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon={'featured'}
                    selected={this.state.tab === 'itemList'}
                >
                   <ItemList/>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon={"search"}
                    selected={this.state.tab === 'search'}
                >
                </TabBarIOS.Item>                
                <TabBarIOS.Item
                    badge={3}
                    systemIcon={'bookmarks'}
                    selected={this.state.tab === 'bookmarks'}
                >
                    <Text>Bookmarks</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}