import React from 'react';
import {TabBar, Button, Icon} from 'antd-mobile';
import {View, Text} from 'react-native';
import Login from '../components/Login';
import LoginButton from './LoginButton';
import Mine from './Mine';
import global from '../Global.js';
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'qj',
            hidden: false,
            testinfo:"asdf"
        };
    }
    testNet=()=>{
          this.props.navigator.push({name: 'login', component: Login})
    }
    renderContent=(pageText) =>{

        return (
        <Mine></Mine>

        )
    }
    renderQJ=(pageText)=>{
      return (
          <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F5FCFF'
          }}>
              <Text>{pageText}</Text>
              <Button onClick={this.testNet}>{this.state.testinfo}</Button>
          </View>
      )
    }
    render() {
        return (
            <TabBar hidden={this.state.hidden}>

                <TabBar.Item title="请假" key="请假" onPress={() => {
                    this.setState({selectedTab: 'qj'})
                }} selected={this.state.selectedTab === 'qj'}>{this.renderQJ('请假')}</TabBar.Item>

                <TabBar.Item title="我的" key="我的" selected={this.state.selectedTab === 'wd'} onPress={() => {
                    this.setState({selectedTab: 'wd'})
                }} icon={require('../img/touxiang.jpg')}>{this.renderContent('登录')}</TabBar.Item>
            </TabBar>
        )

    }
}

export default Main;
