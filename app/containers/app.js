import React from 'react';
import Main from '../components/main.js';
import {Navigator, Button} from 'react-native';
class App extends React.Component {
    render() {
        return (
            <Navigator initialRoute={{
                name: 'My First Scene',
                index: 0
            }} renderScene={(route, navigator) => <Main name={route.name} onForward={() => {
                var nextIndex = route.index + 1;
                navigator.push({
                    name: 'Scene ' + nextIndex,
                    index: nextIndex
                });
            }} onBack={() => {
                if (route.index > 0) {
                    navigator.pop();
                }
            }}/>}></Navigator>
        )
    }
}
export default App;
