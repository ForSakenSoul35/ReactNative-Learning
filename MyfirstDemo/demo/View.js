/*  View 组件 */ 
/*
作为创建UI最基础的组件 
View 是
一个支持Flexbox布局，样式，一些触摸处理和一些无障碍功能的容器
可以放在其他的视图里，也可以有任意多个任意类型的子视图
无论在什么平台 View都会直接对应一个平台的原生视图
*/
import React,{Component} from 'react';
import {StyleSheet,View,Text,Alert} from 'react-native';
import {TouchableNativeFeedback} from 'react-native';
export default class ViewDemo extends Component{
  constructor(props){
    super(props);
    this.state ={
      count:0,
      countLong:0
    }
    
  }
  render(){
    return(
      
      <View style={styles.container}>
        {/* <View style={styles.red}/> */}
        <TouchableNativeFeedback 
          onPress={()=>{
            this.setState({count:this.state.count+1})
          }}
          onLongPress={()=>{
            this.setState({countLong:this.state.countLong+1})
            Alert.alert(
              '提示',
              '确定要删除吗？',
              [
                {text:'取消',onPress:()=>console.log("cancle Pressed")},
                {text:'确定',onPress:()=>console.log("OK Pressed")},
              ]
            )
          }}
          >
          <View>
            <Text>我是TouchableWithoutFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <View>
          <Text>你单击了:{this.state.count}</Text>
          <Text>你长按了:{this.state.countLong}</Text>
        </View>
        
      </View>
      
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    height:500,
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