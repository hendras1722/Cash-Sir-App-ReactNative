import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class AboutScreen extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>About</Text>
                <Button title="Go to Detail About" onPress={() => this.props.navigation.navigate('AboutDetail')}></Button>
            </View>
        )
    }
}

export default AboutScreen;