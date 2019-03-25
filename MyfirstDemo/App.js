/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {Text,View} from 'react-native';

class Blink extends from Component{
  constructor(props){
    super(props);
    this.state = {
      isShowingText:true;
    };
    
  }
  render(){
    if(!this.state.isShowingText){
      return null;
    }else{
      return({
        <Text>{this.props.text}</Text>
      });
    }
  }
}

class BlinkApp extends Component{
  render(){
    return(
      <View>
        <Blink text="hello xhb" />
      </View>
    )
  }
}
// 父组件为BlinkApp 子组件为Blink  
//父组件上有个text属性  子组件通过this.props.text 获取父组件传过来的值 
//父组件的内容是 多个子组件 通过<View>组件包裹
// 子组件 渲染的内容是一个文本组件 
export default BlinkApp;