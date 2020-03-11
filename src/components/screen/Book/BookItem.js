import React, { Fragment } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const BookItem = ({...props}) => {
    console.log(props);
    return(
        <Fragment>
            <FlatList 
                data={props.books}
                renderItem={({item}) => (
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                        <Image source={{uri: "https://inc.mizanstore.com/aassets/img/com_cart/produk/mudah-membuat-dan-berbisnis-aplikasi-android-dengan-android-stud.jpg", width: 100, height: 100}} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, marginBottom: 8 }}>{item.writer}</Text>
                            <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 10 }}>Stock {item.stock}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                onRefresh={props.onRefresh}
                refreshing={props.refreshing}
            />
        </Fragment>
    )
}

export default BookItem