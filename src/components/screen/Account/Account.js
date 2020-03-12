import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity, Button, AsyncStorage } from 'react-native';
import { InputGroup, Input } from 'native-base';

// import Spinner from '../Spinner/Spinner';
import { getProducts, deleteProducts, searchProduct } from '../../redux/actions/Product';

class Account extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Account",
            headerStyle: {
                backgroundColor: '#3346A8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }

    onLogout() {
        AsyncStorage.removeItem('user-id');
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('isAuth');
        AsyncStorage.removeItem('Status');
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View>
                <Image source={require('../../../img/avatar-png-1.png')} style={{ position: 'relative', width: 100, height: 100, marginTop: 20, marginLeft: 40 }} />
                <View style={{ marginLeft: 180, marginTop: -80 }}>
                    <Text >Name:</Text>
                    <Text >Status:</Text>
                </View>

                <Text onPress={this.onLogout.bind(this)}>Logut</Text>
            </View>
        )
    }
}

export default Account;