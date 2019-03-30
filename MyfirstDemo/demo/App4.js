import React,{Component} from 'react';
import {View,Button,Alert,StyleSheet} from 'react-native';

class TouchThings extends Component{
  render(){
    return(
      <View>
        <View>
          <Button onPress={this._onPressButton} title="Press Me"/>
        </View>
      </View>
    )
  }
}
// Button组件会在IOS上渲染一个蓝色的标签状按钮，在安卓上则会渲染一个蓝色圆角矩形带白字的按钮 
// 点击这个按钮 会触发 onPress 函数 
// 可以指定color属性来修改按钮的颜色