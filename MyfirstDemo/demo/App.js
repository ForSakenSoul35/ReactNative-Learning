// 使用FlexBox布局
// 在ReactNative中使用flexbox规则来指定某个组件的子元素的布局 这样可以在不同的屏幕上提供一致的布局结构

import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

export default class JustifyContentBasics extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    // justifyContent:'flex-start'靠左排列
    // justifyContent:'center'居中排列
    // justifyContent:'space-between'两端对齐
    // justifyContent:'space-around'  元素之间间距一致
    // justifyContent:'space-evenly'
    // justifyContent:'space-around'  
    alignItems:'stretch',
  },
  view1:{
    width:50,
    height:50,
    backgroundColor:'powderblue',
  },
  view2:{
    width:50,
    height:50,
    backgroundColor:'skyblue',
  },
  view3:{
    width:50,
    height:50,
    backgroundColor:'steelblue',
  }
})  