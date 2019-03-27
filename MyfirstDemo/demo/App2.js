import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';

export default class LotsOfStyle extends Component{
  render(){
    return(
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  red:{
    color:'red',
    fontSize:30,
  },
  bigBlue:{
    color:'blue',
    fontSize:30,
    fontWeight:'bold',
  }
})