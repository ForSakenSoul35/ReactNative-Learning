import React,{Component} from 'react';
import {View,TextInput,Text} from 'react-native';

export default class PizzaTranslator extends Component{
  constructor(props){
    super(props);
    this.state ={
      text:'',
    }
  }
  render(){
    return(
      <View style={{padding:20}}>
        <TextInput
          style = {{height:40}}
          placeholder="Type here to translate!"
          onChangeText = {(text)=>this.setState({text})}
        >
          <Text style={{padding:10}}>
            {this.state.text.split('').map((word)=>word&& 'a').join('')}
          </Text>
        </TextInput>
      </View>
    )
  }
}