import React from 'react';
import {TabBar, Button, Icon} from 'antd-mobile';
import {View, Text} from 'react-native';
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
      fetch(`http://192.168.0.108:8083/AskLeave/login!login.action?user.username=wdh&user.password=8888`)
          .then(response=>{
              if(response.ok){
                  return response.json();
              }else throw new Error();
          })
          .then(json=>{
              this.setState({
                testinfo:json.msg
              });
          })
          .catch(e=>console.error(e));
    }
    renderContent=(pageText) =>{
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
                }} selected={this.state.selectedTab === 'qj'}>{this.renderContent('请假')}</TabBar.Item>

                <TabBar.Item title="我的" key="我的" selected={this.state.selectedTab === 'wd'} onPress={() => {
                    this.setState({selectedTab: 'wd'})
                }} icon={require('../img/touxiang.jpg')}>{this.renderContent('我的')}</TabBar.Item>
            </TabBar>
        )

    }
}

export default Main;
