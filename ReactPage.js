import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

const dataArr = require('./data.json').data;

// 获取当前设备的宽度
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

import ReactPageListFour from './ReactPageListFour';
import ReactPageListZero from './ReactPageListZero';
import ReactPageListOne from './ReactPageListOne';

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
            dataSource: this.state.dataSource.cloneWithRows(dataArr)
        })
    }

    _renderRow(rowData) {

        if(rowData.card_type === 4){
            return(
                <ReactPageListFour data={rowData} />
            )
        } else if(rowData.card_type === 0){
            return(
                <ReactPageListZero data={rowData}/>
            )
        }else if(rowData.card_type === 1){
            return (
                <View>
                    <View style={styles.mainView}>
                        <View style={styles.leftView}>
                            <Image
                                source={{uri: rowData.pic_url}}
                                style={styles.iconStyle}
                            />
                            <Text>{rowData.title}</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={{color: 'rgba(62, 184, 175, 1)'}}>更多精彩课程 →</Text>
                        </View>
                    </View>
                    <ReactPageListOne data={rowData.courses}/>
                </View>

            )
        } else {
            return <View />
        }
    }
}


const styles = StyleSheet.create({
    mainView: {
        width: width,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',

        borderTopWidth: 10,
        borderTopColor: '#e0e0e0',
    },
    leftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    rightView: {

    }
})


