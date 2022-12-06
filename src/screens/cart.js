import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

export default Cart = (props) => {
    const apiData = useSelector((state) => state.reducer.data);
    const cartData = apiData?.filter((item) => item.cart);

    return (
        <View style={styles.main_container}>
            <FlatList
                data={cartData}
                showsVerticalScrollIndicator={false}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) =>
                    <View style={styles.listView}>
                        <View style={styles.imageView}>
                            <Image source={{ uri: item.image_url }}
                            resizeMode='contain' style={styles.image} />
                        </View>
                        <View style={{alignItems:'flex-start', marginLeft:10}}>
                            <Text>{item.name}</Text>
                            <Text>{item.tagline}</Text>
                        </View>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listView: {
        marginTop: 10,
        marginBottom: 5,
        flexDirection: 'row',
        borderBottomWidth:1,
        borderBottomColor:'#34deeb'
    },
    main_container: {
        height: '100%',
    },
    image: {
        width: 120,
        height: 100
    },
    imageView : {
        height:100,
        width:100,
        marginBottom:10
    },

});

