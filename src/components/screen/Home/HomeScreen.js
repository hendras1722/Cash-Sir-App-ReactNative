import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: "Home",
        headerStyle: {
            backgroundColor: 'blue',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const books = this.props
        return (
            <View style={{ flex: 1 }}>

                <Text>Home Screen</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center', width: 80, marginTop: 545, position: 'absolute', marginLeft: 13, padding: 5 }}
                    onPress={() => this.props.navigation.navigate('Product', {
                        itemId: 80,
                        otherParams: books
                    })}>
                    <Text style={{ color: "#000" }}><Image source={require('../../../img/res/drawable-hdpi/baseline_add_to_queue_black_18.png')} style={{ padding: 5, marginBottom: 20, position: 'absolute' }} />   Product</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginTop: 545, position: 'absolute', width: 80, marginLeft: 115 }}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={{ color: "#000", marginLeft: 5 }}><Image source={require('../../../img/res/drawable-hdpi/baseline_settings_black_18.png')} style={{ padding: 5, position: 'absolute' }} />Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginTop: 545, position: 'absolute', width: 80, marginLeft: 220 }}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={{ color: "#000", marginLeft: 5 }}><Image source={require('../../../img/res/drawable-hdpi/baseline_add_shopping_cart_black_18.png')} style={{ padding: 5, position: 'absolute' }} />Order</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginTop: 545, position: 'absolute', width: 80, marginLeft: 320 }}
                    onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={{ color: "#000", marginLeft: 5 }}><Image source={require('../../../img/res/drawable-hdpi/baseline_account_circle_black_18.png')} style={{ padding: 5, position: 'absolute' }} />Account</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default HomeScreen;