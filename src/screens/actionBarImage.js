import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
 
const ActionBarImage = () => {
  const navigation = useNavigation();
  const apiData = useSelector(state=>state.reducer.data);
  console.log('apiData', apiData)
  const cartLength  = apiData?.filter((item)=>item.cart).length;

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Cart')}}>
        <View style={{flexDirection: 'row'}}>
        <Icon name="shopping-cart" size={30} color="#fff" />
        {cartLength > 0 ? <View style={{backgroundColor:'red', width:15, height: 15, borderRadius:9, alignItems:'center'}}>
          <Text style={{color:'#ffffff', fontSize:11}}>{cartLength}</Text>
          </View> : null}
    </View>
        </TouchableOpacity>
  );
};
 
export default ActionBarImage;