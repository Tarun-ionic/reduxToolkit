import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { store } from './src/store/index'
import Home from './src/screens/Home'
import Cart from './src/screens/cart'
import Profile from './src/screens/Profile'

import ActionBarImage from './src/screens/actionBarImage';

console.disableYellowBox = true;
const Stack = createNativeStackNavigator();

const App = () =>  {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerRight: () => <ActionBarImage />,
        }}
        >
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{ title: 'Beer right now' ,
            headerTintColor: '#fff',
              headerStyle: {
              backgroundColor: '#34deeb'
            },}}
          />
          <Stack.Screen 
            name="Profile" 
            component={Profile}
            options={{ title: 'Details' ,
            headerTintColor: '#fff',
              headerStyle: {
              backgroundColor: '#34deeb'
            },}}
          />
            <Stack.Screen 
            name="Cart" 
            component={Cart}
            options={{ title: 'Cart' ,
            headerTintColor: '#fff',
              headerStyle: {
              backgroundColor: '#34deeb'
            },}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
