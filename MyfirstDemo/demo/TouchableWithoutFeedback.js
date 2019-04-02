import React,{Component } from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native'

class TouchableWithoutFeedbackDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      text:'',
      startTime:0,
      
    }
  }
  render(){
    return(
      <View>
      <TouchableWithoutFeedback
        onPressIn={()=>{
          this.setState({text:'触摸开始',startTime:new Date().getTime()})
        }}
        onPressOut={()=>{
          this.setState({text:'触摸结束,持续时间:'+(new Date().getTime()-this.state.startTime)+'毫秒'})
      }}
        
      >
        <View>
          <Text >点我</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text>{this.state.text}</Text>
      </View>
      
    )
  }
}
export default TouchableWithoutFeedbackDemo;