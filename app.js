import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

import ReactPage from './ReactPage';
import FlowPage from './FlowPage';
import JestPage from './JestPage';

export default class extends Component {
    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                tabBarTextStyle={{color:'rgba(62, 184, 175, 1)'}}
            >
                <ReactPage tabLabel="今日限免"/>
                <FlowPage tabLabel="体系课"/>
                <JestPage tabLabel="热文"/>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    tabBarUnderlineStyle: {
        backgroundColor: 'rgba(62, 184, 175, 1)'
    }
});


