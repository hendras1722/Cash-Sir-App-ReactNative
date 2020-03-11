import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import { InputGroup, Input } from 'native-base';

// import Spinner from '../Spinner/Spinner';
import { getProducts, deleteProducts, searchProduct } from '../../redux/actions/Product';

class Book extends Component {

    static navigationOptions = {
        title: null,
        headerStyle: {
            backgroundColor: '#3346A8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
    };

    onSearchProduct = (e) => {
        console.log(e)
        this.setState({
            searchName: e
        })
        this.props.dispatch(searchProduct(e));
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => (
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20 }}
                    onPress={() => navigation.navigate('AddProduct')}>
                    <Image
                        source={require('../../../img/res/drawable-hdpi/baseline_control_point_black_18.png')}
                    />
                </TouchableOpacity>
            ),
        }
    }

    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        console.log(this.props)
        await this.props.dispatch(getProducts());
    }

    onSubmit = async productId => {
        console.log(productId)
        await this.props.dispatch(deleteProducts(productId));
    };


    // onRefreshing = () => {
    //     this.getBook();
    // }

    renderRow = ({ item }) => {
        return (

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                {/* <Image source={{ uri: "https://inc.mizanstore.com/aassets/img/com_cart/produk/mudah-membuat-dan-berbisnis-aplikasi-android-dengan-android-stud.jpg", width: 100, height: 100 }} /> */}
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditBook', {
                            product: item
                        })}>
                            <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "red" }} onPress={this.onSubmit.bind(this, item.id)}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { products } = this.props;
        console.log(this.props)
        return (
            <View>
                <View>
                    <InputGroup>
                        <Input style={{ backgroundColor: 'white', width: 50, marginHorizontal: 50, borderRadius: 20, paddingLeft: 50, paddingRight: 40 }} placeholder='Mau cari apa ..... ?' onChangeText={this.onSearchProduct} />
                    </InputGroup>
                    <Image source={require('../../../img/res/drawable-hdpi/baseline_search_black_18.png')} style={{ position: 'absolute', marginLeft: 65, marginTop: 12 }} />

                </View>
                {/* <Spinner isLoading={books.isLoading} /> */}
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    <FlatList
                        data={products}
                        renderItem={this.renderRow}
                        // refreshing={books.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Book);