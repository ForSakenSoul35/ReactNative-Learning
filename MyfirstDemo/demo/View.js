/*  View 组件 */ 
/*
作为创建UI最基础的组件 
View 是
一个支持Flexbox布局，样式，一些触摸处理和一些无障碍功能的容器
可以放在其他的视图里，也可以有任意多个任意类型的子视图
无论在什么平台 View都会直接对应一个平台的原生视图
*/
import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
export default class ViewDemo extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.red}/>
        <View style={styles.blue}/>
        <Text>Hello world</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    height:100,
    padding:20,
    
  },
  red:{
    backgroundColor:'red',
    flex:1,
  },
  blue:{
    backgroundColor:'blue',
    flex:2,
  }
});
/*
View 设计的初衷是和StyleSheet搭配使用 这样可以使代码更清晰以及获得更高的性能

*/

/*
合成触摸事件：
用于View响应属性 

*/