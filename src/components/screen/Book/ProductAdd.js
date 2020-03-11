import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Picker, Icon, Form, Item, Input, Button, Text } from 'native-base';

import { postProducts } from '../../redux/actions/Product';
import Spinner from '../Spinner/Spinner';

class BookAdd extends Component {

    state = {
        name: "",
        description: "",
        price: "",
        stock: "",
        id_category: "",
        selected: undefined
    };

    onValueChange(event) {
        this.setState({
            selected: event
        });
    }

    onSubmit = async () => {
        console.log(this.state)
        await this.props.dispatch(postProducts(this.state));

        // if (!this.props.books.books.isLoading) {
        //     this.props.navigation.navigate('Book');
        // }

    }

    render() {
        return (
            <Container>
                {/* <Spinner isLoading={this.props.books.isLoading} /> */}
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name books" onChangeText={(text) => this.setState({ name: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ description: text })} />
                        </Item>
                        {/* <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ image: text })} />
                        </Item> */}
                        <Item>
                            <Input placeholder="price" onChangeText={(text) => this.setState({ price: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} />
                        </Item>
                        <Item>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                placeholder="Choose"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Microcontroller" value='1' />
                                <Picker.Item label="Component" value='2' />

                            </Picker>
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(BookAdd);