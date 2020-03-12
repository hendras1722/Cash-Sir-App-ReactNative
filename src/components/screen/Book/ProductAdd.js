import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Picker, Icon, Form, Item, Input, Button, Text } from 'native-base';

import { postProducts } from '../../redux/actions/Product';
import Spinner from '../Spinner/Spinner';

class BookAdd extends Component {
    static navigationOptions = {
        title: "Add Product",
        headerStyle: {
            backgroundColor: '#3346A8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        name: "",
        description: "",
        price: "",
        stock: "",
        id_category: "",
        selected: undefined
    };

    onCategory(e) {
        this.setState({
            id_category: e
        })
    }

    onValueChange(event) {
        this.setState({
            selected: event
        });
    }

    onSubmit = async () => {
        console.log(this.state)
        await this.props.dispatch(postProducts(this.state));

        if (!this.props.books.books.isLoading) {
            this.props.navigation.navigate('Book');
        }

    }

    render() {
        return (
            <Container>
                {/* <Spinner isLoading={this.props.books.isLoading} /> */}
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="Name Product" onChangeText={(text) => this.setState({ name: text })} />
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
                            <Input placeholder="Category" onChangeText={(text) => this.setState({ id_category: text })} />
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