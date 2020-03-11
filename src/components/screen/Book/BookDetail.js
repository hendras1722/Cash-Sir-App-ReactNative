import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { } from 'react-native-gesture-handler';

class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.book = this.props.navigation.getParam("book");

    }
    static navigationOptions = {
        title: this.book
    };
    render() {
        return (
            <View style={{ margin: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image source={{ uri: "https://inc.mizanstore.com/aassets/img/com_cart/produk/mudah-membuat-dan-berbisnis-aplikasi-android-dengan-android-stud.jpg", width: 100, height: 100 }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{this.book.name}</Text>
                        <Text style={{ fontSize: 13, marginLeft: 10, marginBottom: 8 }}>{this.book.writer}</Text>
                        <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 10 }}>Stock {this.book.stock}</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Text>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>{this.book.description}</Text>
                </View>
            </View>
        )
    }
}

export default ProductDetail;