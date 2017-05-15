import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class reading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Image
                        source={{uri: this.props.data.teacher_info.avatar}}
                        style={styles.iconViewStyle}/>
                </View>
                <View style={styles.rightViewStyle}>
                    <Text style={{fontSize: 16, color:'#000', marginBottom:10}}>{this.props.data.title}</Text>
                    <View style={{flexDirection: 'row', marginBottom:10, alignItems: 'center'}}>
                        <Text style={{fontSize: 12, color:'#666'}}>{this.props.data.teacher_info.name} | </Text>
                        <Text style={{fontSize: 12, color:'#666', marginTop: 2}}>{this.props.data.teacher_info.desc}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom:10}}>
                        <Text style={{fontSize: 12, color:'rgba(62, 184, 175, 1)', marginRight: 10}}>△回放</Text>
                        <Text style={{fontSize: 12, color:'#666', marginTop:-1}}>{this.props.data.user_count}已学</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',

    },
    leftViewStyle: {
        flex: 3,
        height: 120,

        justifyContent: 'center',
        alignItems: 'center'
    },
    iconViewStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    rightViewStyle: {
        flex: 7,
        height: 120,

        justifyContent: 'center',
        padding: 10
    }
});

