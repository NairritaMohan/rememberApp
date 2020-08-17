import * as React from 'react';
import {View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default class HomeScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
<Text>App.js</Text>

<TouchableOpacity 
style = {styles.button}
onPress = {()=>{
this.props.navigation.navigate("AddScreen")
}}>
  <MaterialIcons
  name = "add"
  size = {30}
  
  />

</TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  button:{
    backgroundColor: '#4ecdc4',
    width: 60,
    height: 60,
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 20,
    shadowColor : '#000',
    shadowOpacity : 0.2,
    shadowRadius : 20,
    shadowOffset: {
      width:4,
      height:4
    },
  position: "absolute",
  right: 20,
  bottom : 20

  }
})