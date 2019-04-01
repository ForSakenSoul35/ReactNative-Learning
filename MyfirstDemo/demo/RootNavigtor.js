import { StackNavigator } from 'react-navigation';
import React from 'react';
import {View,Text} from 'react-native';
const HomeScreen = () =>(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text> HomeScreen </Text>
  </View>
)

const DetailsScreen = () =>(
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text> DetailsScreen </Text>
  </View>
)
const RootNavigator = StackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerTitle:'Home',
    }
  },
  Details:{
    screen:DetailsScreen,
    navigationOptions:{
      headerTitle:'Details',
    }
  }
});

export default RootNavigator;