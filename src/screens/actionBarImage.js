import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

 
const ActionBarImage = () => {
   
  const apiData = useSelector(state=>state.reducer.data);
  console.log('apiData', apiData)
  const cartLength  = apiData?.filter((item)=>item.cart).length;

  return (
    <View style={{flexDirection: 'row'}}>
        <Icon name="shopping-cart" size={30} color="#fff" />
        <View style={{backgroundColor:'red', width:15, height: 15, borderRadius:9, alignItems:'center'}}>
          <Text style={{color:'#ffffff', fontSize:11}}>{cartLength}</Text></View>
    </View>
  );
};
 
export default ActionBarImage;