import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class AboutDetailScreen extends Component{
    render(){
        return(
            <View>
                <Text>About Detail Screen</Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 335, marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('Home', {
                        itemId: 80,
                        otherParams: books
                    })}>
                        <Text style={{  color: "#fff" }}>Go to Home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default AboutDetailScreen;