import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

export default Cart = (props) => {
    const apiData = useSelector((state) => state.reducer.data);

    return (
        <View style={styles.main_container}>
           <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main_container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlist_view: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    detail_box: {
        elevation: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        alignSelf: 'center',
        paddingVertical: 20
    },
    button_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    button: {
        backgroundColor: '#34deeb',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 20
    },
    textStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    tagline: {
        fontWeight: '600',
        fontSize: 14
    },
    description: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center'
    },
    image: {
        width: 400,
        height: 480
    },
    header : {
        paddingHorizontal:10,
        height: '5%',
        width:'100%',
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection : 'row'
    }, 
    headerText : {
        fontSize : 25,
        fontWeight : 'bold'
    }
});

