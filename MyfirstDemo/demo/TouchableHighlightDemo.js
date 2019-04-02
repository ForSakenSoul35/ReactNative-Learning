import React,{Component} from 'react';
import {View,Text,TouchableHighlight } from 'react-native'

class TouchableHighlightDemo extends Component{
  constructor(props){
    super(props);
    this.state={
      text:'',

    }
  }
  render(){
    return(
      <View>
        <TouchableHighlight
    style={{marginTop:20}}
    activeOpacity={0.7}
    underlayColor='green'
    onHideUnderlay={()=>{
        this.setState({text:'衬底被隐藏'})
    }}
    onShowUnderlay={()=>{
        this.setState({text:'衬底显示'})
    }}
    onPress={()=>{

    }}
>
    <View >
        <Text >
            TouchableHighlight
        </Text>
    </View>
</TouchableHighlight>
<Text >{this.state.text}</Text>
     </View>
      
    )
  }
}

export default TouchableHighlightDemo;