import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

// 获取当前设备的宽度
const Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

export default class extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.topView}>
                    <Image
                        source={{uri: this.props.data.pic_url}}
                        style={styles.iconStyle}
                    />
                    <Text style={{marginLeft: 8}}>{this.props.data.title}</Text>
                </View>
                <View>
                    <Image
                        source={{uri: this.props.data.joincard[0].goods_cover}}
                        style={styles.mainImgStyle}
                    />
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bottomTitleStyle}>6招,教你写出让用户忍不住转发的好文案</Text>
                    <View style={styles.bottomViewDes}>
                        <Text style={{color:'#999', fontSize:12}}>{this.props.data.joincard[0].sales_volume}人购买</Text>
                        <Text style={{color:'orange', fontSize:14}}>限时免费</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingBottom: 20,
        borderBottomWidth: 10,
        borderBottomColor: '#e0e0e0'
    },
    topView: {
        flexDirection: 'row',
        height: 40,
        // backgroundColor: 'red',
        alignItems: 'center',
        paddingLeft: 10
    },
    mainImgStyle: {
        width: width,
        height: width * 0.5,
        // 设置图片的内容模式 contain  cover
    },
    iconStyle: {
        width: 20,
        height: 20
    },
    bottomView: {
        width: width,
        height: 60,
        // backgroundColor: 'red',
        justifyContent: 'center',
        padding: 10
    },
    bottomTitleStyle: {
        fontSize: 16,
        marginTop: 20
    },
    bottomViewDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }
});
