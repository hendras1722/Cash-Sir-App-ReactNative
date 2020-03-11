import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native'
import { Container, Form, Item, Input, Label, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import axios from 'axios'

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
        console.log(e)
        axios
            .post("http://192.168.1.16:4000/user/login", this.state)
            .then(res => {
                console.log(res.data);
                AsyncStorage.setItem('token', res.data.token);
                AsyncStorage.setItem('user-id', res.data.id);
                AsyncStorage.setItem('isAuth', true);
                // this.props.history.push('/');
                this.props.navigation.navigate('Home');
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../../../img/arcreactor.png')} style={{ width: 130, height: 130, marginLeft: 130, position: 'relative', marginTop: 50 }} />
                        <Text style={{ marginTop: 20, marginLeft: 170, fontSize: 20 }}>Login</Text>
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