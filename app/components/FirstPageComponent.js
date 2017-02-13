import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import SecondPageComonent from "./SecondPageComponent";

export default class FirstPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    _pressButtoon(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'SecondPageComonent',
                component:SecondPageComonent,
            })
        }
    }

    render(){
        return (
            <View>
                <TouchableOpacity onPress={this._pressButtoon.bind(this)}>
                    <Text>点我跳转</Text>
                </TouchableOpacity>
            </View>
            );
    }
}