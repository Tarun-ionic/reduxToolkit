import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestAPIData } from '../../store/reducers/index';
import { addFavorite, addCart } from '../../store/reducers/index';
import SplashScreen from "react-native-splash-screen"; 
export default Home = (props) => {

  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.reducer.data);

  const addFavouriteItem = (item) => {
    dispatch(addFavorite(item))
  }


  const addtoCart = (item) => {
    dispatch(addCart(item))
  }
  useEffect(() => {
    dispatch(getTestAPIData());
    setTimeout(()=>{SplashScreen.hide();},3000)
  }, [])


  return (
    <View style={styles.main_container}>
      <FlatList
        data={apiData}
        showsVerticalScrollIndicator={false}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) =>
          <View style={styles.flatlist_view}>
            <Image source={{ uri: item.image_url }} 
              resizeMode='contain' style={styles.image} />
            <View style={styles.detail_box}>
              <Text style={styles.title}>
                {item.name}
              </Text>
              <Text style={styles.tagline}>
                {item.tagline}
              </Text>
              {/* <Text style={styles.description}>
                {item.description}
              </Text> */}
              <View style={styles.button_view}>
                <TouchableOpacity onPress={() => { addFavouriteItem(item); }}
                  style={styles.button}>
                  <Text style={styles.textStyle}>
                    {item.like ? 'Dislike' : 'Like'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                 onPress={() =>
                  props.navigation.navigate('Profile', { prodId: item.id })
                }>
                  <Text style={styles.textStyle}>
                    Details
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { addtoCart(item); }}
                 style={styles.button}>
                  <Text style={styles.textStyle}>
                  {item.cart ? 'Ordered' : 'order now'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
});

