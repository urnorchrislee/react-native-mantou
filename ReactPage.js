import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

const dataArr = require('./data.json').data;

import ReactPageList from './ReactPageList';

export default class extends Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        );
    }

    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(dataArr)
        })
    }

    _renderRow(rowData){
        return(
            <ReactPageList data={rowData} />
        )
    }
}



