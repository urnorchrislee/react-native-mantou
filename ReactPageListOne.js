import React, {Component} from 'react';
import {
    AppRegistry,
    ListView,
    View,
    Text
} from 'react-native';

import ReactPageListOneView from './ReactPageListOneView'

// 获取当前设备的宽度
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

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
            dataSource: this.state.dataSource.cloneWithRows(this.props.data)
        })
    }

    _renderRow(rowData) {
        return (
            <ReactPageListOneView data={rowData}/>
        )
    }
}


