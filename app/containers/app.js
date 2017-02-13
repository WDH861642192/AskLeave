import React from 'react';
import Main from '../components/main.js';
import Login from '../components/Login';
import {Navigator, Button} from 'react-native';
import FirsPageComponent from '../components/FirstPageComponent';
class App extends React.Component {
    render() {
        return (
        <Navigator //指定了默认的页面，也就是启动app之后会看到的第一屏，需要两个参数，name跟component
                initialRoute = {{
                name: "defaultName",
                component: Login
            }}configureScene = {
            (route) => { //跳转的动画
              return Navigator.SceneConfigs.FadeAndroid; }} renderScene={(route, navigator) => {
                let Component = route.component;
                if (route.component) {
                    return <Component {...route.params} navigator={navigator}/>
                }
            }
        } />)
    }
}
export default App;
