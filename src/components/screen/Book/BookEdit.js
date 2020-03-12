import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Picker, Icon, Item, Input, Button, Text } from 'native-base';

import { updateProduct } from '../../redux/actions/Product';
// import Spinner from '../Spinner/Spinner';

class ProductEdit extends Component {
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

    componentDidMount() {
        const product = this.props.navigation.getParam("product");

        this.setState({
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
            image: product.image
        });
    }


    onSubmit = async () => {

        console.log(this.state)
        const product = this.props.navigation.getParam('product');
        await this.props.dispatch(updateProduct(product.id, this.state));

        if (!this.props.products.isLoading) {
            this.props.navigation.navigate('Product');
        }
    };

    render() {
        // console.log(this.state);
        return (
            <Container>
                {/* <Spinner isLoading={this.props.products.isLoading} /> */}
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
                            <Item>
                                <Input placeholder="Category" onChangeText={(text) => this.setState({ id_category: text })} />
                            </Item>
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
    };
};

export default connect(mapStateToProps)(ProductEdit);