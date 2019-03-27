import React,{Component} from 'react';
import {Text,View} from 'react-native';

class Blink extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShowingText:true,
    }
    setInterval(()=>{
      this.setState((previousState)=>{
        return{
          isShowingText:!previousState.isShowingText
        };
      })
    },1000);
  }
  render(){
    if(!this.state.isShowingText){
      return null;
    }else{
      return(
        <Text>{this.props.text}</Text>  
      )
    }
  }
}

export default class  BlinkApp extends Component{
  render(){
    return(
      <View>
      <Blink text='hello xhb '/>
      <Blink text='hello react native'/>
    </View>
    )
    
  }
}