import React,{ Component } from 'react';
import {TabBarIOS, Text} from 'react-native';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'newsFeed'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    systemIcon={'featured'}
                    selected={this.state.tab === 'newsFeed'}
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