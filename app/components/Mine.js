import React from 'react';
import {List,Button, Flex} from 'antd-mobile';
import {View} from 'react-native';
// import '../css/mine.css';
const Item = List.Item;
const Brief = Item.Brief;

class Mine extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return (
            <View>
                <List renderHeader={() => '我的'} className="my-list"></List>
                <List className="mgt30">
                    <Item arrow="horizontal" onClick={()=>this.onClick('mine')}>个人中心</Item>
                </List>
                <List className="mgt30">
                    <Item arrow="horizontal" onClick={()=>this.onClick('order')}>我的订单</Item>
                </List>
                <List className="mgt30">
                    <Item arrow="horizontal" onClick={()=>this.onClick('WarehouseOut')}>出库历史</Item>
                </List>
                <List className="mgt30">
                    <Item arrow="horizontal" onClick={() => {}}>关于我们</Item>
                </List>
            </View>

        )
    }
}

export default Mine
