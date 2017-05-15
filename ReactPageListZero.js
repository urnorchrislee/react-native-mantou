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
                <View>
                    <Image
                        source={{uri: this.props.data.pic_url}}
                        style={styles.mainImgStyle}
                    />
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.bottomTitleStyle}>{this.props.data.title}</Text>
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
        paddingBottom: 2,
        borderBottomWidth: 10,
        borderBottomColor: '#e0e0e0'
    },
    mainImgStyle: {
        width: width,
        height: width * 0.5,
        // 设置图片的内容模式 contain  cover
    },
    bottomView: {
        width: width,
        height: 40,
        // backgroundColor: 'red',
        justifyContent: 'center',
        padding: 13
    },
    bottomTitleStyle: {
        fontSize: 16,
        // marginTop: 20
    }
});
