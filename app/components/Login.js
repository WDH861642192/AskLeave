import React, {Component} from 'react';
import {
    ToolbarAndroid,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import global from '../Global.js';
import EditView from './EditView';
import LoginButton from './LoginButton';
import Main from './main';
import Mine from './Mine';
export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.password = "";
    }

    render() {
        return (

            <View style={LoginStyles.loginview}>
                <View style={{
                    flexDirection: 'row',
                    height: 100,
                    marginTop: 1,
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}></View>
                <View style={{
                    marginTop: 80
                }}>
                    <EditView name='输入用户名/注册手机号' onChangeText={(text) => {
                        this.userName = text;
                    }}/>
                    <EditView name='输入密码' onChangeText={(text) => {
                        this.password = text;
                    }}/>
                    <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
                    <Text style={{
                        color: "#4A90E2",
                        textAlign: 'center',
                        marginTop: 10
                    }}>忘记密码？</Text>
                </View>
            </View>
        )
    }

    onPressCallback = () => {
        // let formData = new FormData();
        // formData.append("loginName",this.userName);
        // formData.append("pwd",this.password);
        // let url = "http://localhost:8080/loginApp";
        // fetch(`http://192.168.0.108:8083/AskLeave/login!login.action?user.username=wdh&user.password=8888`)
        // var url=`http://192.168.0.108:8083/AskLeave/login!login.action?user.username=wdh&user.password=8888`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // body: JSON.stringify({user.username: this.userName, user.password: this.password})
        fetch(`http://192.168.0.108:8083/AskLeave/login!login.action?user.username=wdh&user.password=8888`).then(response => {
            if (response.ok) {
                return response.json();
            } else
                throw new Error();
            }
        ).then(json => {
            if (json.msg == '登录成功') {
                global.username = json.data.username;
                global.userid = json.data.id;
                const {navigator} = this.props;
                var route = {
                    component: Main
                }
                if (navigator) {
                  navigator.replace(route);
                }
            } else {
                // 登录出错
            }

        });
        // const {navigator} = this.props;
        // var route = {
        //     component: Main
        // }
        // if (navigator) {
        //     // navigator.replace(route);
        //     navigator.push({name: 'main', component: Main});
        // }
        // this.props.navigator.push({name: 'main', component: Main})
        // var a = this.props.navigator.getCurrentRoutes();
    };

}

class loginLineView extends Component {
    render() {
        return (
            <Text >
                没有帐号
            </Text>
        );
    }
}

const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff'
    }
});
