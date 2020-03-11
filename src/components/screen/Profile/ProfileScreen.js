import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends Component{
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('name')
        }
    };
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile</Text>
                <Button title="Go to About" onPress={() => this.props.navigation.navigate('About')}></Button>
                <Button title="Update the title" onPress={() => this.props.navigation.setParams({ name: "kuhaku update" })}></Button>
            </View>
        )
    }
}

export default ProfileScreen;