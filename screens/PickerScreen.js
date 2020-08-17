import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet,TouchableOpacity } from 'react-native'

export default class PickerScreen extends Component {

    constructor(){
        super()

        this.state ={
            user : ''
        }
    }
   
   updateType = (type) => {
      this.setState({ user: type })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateType}>
               <Picker.Item label = "Name" value = "name" />
               <Picker.Item label = "Location" value = "location" />
               <Picker.Item label = "Age" value = "age" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>

            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate('AddScreen')
            }}
            
            >
                <Text>Select</Text>
            </TouchableOpacity>
         </View>
      )
   }
}


const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   },
   button : {
       width: '75%',
       alignItems :'center',
       justifyContent: 'center',
       backgroundColor : '#19b5fe',
       height : 40,
       marginLeft : 50,
       marginTop : 200,
       borderRadius : 20,
       borderWidth : 2,
       padding :10

   }
})