import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native'
import { Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import axios from 'axios'
import { REACT_APP_API_URL, API_STORAGE } from 'react-native-dotenv'

class LoginScreen extends Component {

    static navigationOptions = {
        headerTitle: () => null,
        headerStyle: {
            backgroundColor: '#3346A8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    state = {
        email: '',
        password: ''
    }

    onChangeEmail = (e) => {
        console.log(e)
        this.setState({
            email: e
        })
    }

    onChangePassword = (e) => {
        console.log(e)
        this.setState({
            password: e
        })
    }

    onSubmit = (e) => {
        console.log(REACT_APP_API_URL)
        // console.log(e)
        axios
            .post(`${REACT_APP_API_URL}/user/login`, this.state)
            .then(res => {
                console.log(res.data);
                { API_STORAGE } ('token', res.data.token);
                { API_STORAGE } ('user-id', res.data.id);
                { API_STORAGE } ('isAuth', true);
                this.props.navigation.navigate('Home');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        console.disableYellowBox = true
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../../../img/arcreactor.png')} style={{ width: 130, height: 130, marginLeft: 130, position: 'relative', marginTop: 50 }} />
                        <Text style={{ marginTop: 20, marginLeft: 130, fontSize: 20 }}>Cash Sir Apps</Text>
                        <Form style={{ marginVertical: 20 }}>
                            <Item stackedLabel style={{ width: 380 }}>
                                <Label>E-mail</Label>
                                <Input onChangeText={this.onChangeEmail} />
                            </Item>
                            <Item stackedLabel last style={{ width: 380, marginLeft: 12 }}>
                                <Label style={{ marginLeft: -12 }}>Password</Label>
                                <Input style={{ marginLeft: -12 }} onChangeText={this.onChangePassword} secureTextEntry={true} />
                            </Item>
                        </Form>
                    </View>
                    <View>
                        <Button hasText onPress={this.onSubmit} style={{ width: 100, justifyContent: 'center', marginTop: -160, marginHorizontal: 150, marginTop: 10 }}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                </Content>
            </Container >
        )
    }
}

export default LoginScreen;