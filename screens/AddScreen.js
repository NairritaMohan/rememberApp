import  React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,Picker,TouchableOpacity} from 'react-native' ;

export default class AddScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId : '',
            name : '',
            type : ''
        }
    }

    saveData=()=>{
        const emailId = this.state.emailId
        const name = this.state.name
        const type = this.state.type
    }

    render(){
        return(
            <View  styles  = {styles.container}>
                <TextInput
                style = {styles.formTextInput}
                placeholder = {'abc@exanple.com'}
                keyboardType = {'email-address'}
                onChangeText = {(text)=>{
                    this.setState({
                        emailId : text
                    })
                }}
value = {this.state.emailId}
                
                />

<TextInput
                style = {styles.formTextInput}
                placeholder = {'Enter Name'}
              maxLength = {10}
                onChangeText = {(text)=>{
                    this.setState({
                        name : text
                    })
                }}
value = {this.state.name}
                
                />

<TouchableOpacity style = {styles.button}
onPress = {this.saveData()}>
    <Text style = {styles.btnText}>Save</Text>
</TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex :1,
       
    },

    formTextInput :{
        width : '80%',
        height : 40,
        alignSelf : 'center',
        borderColor : '#000',
        borderRadius  :10,
        borderWidth :4,
        marginTop :50,
        padding: 10
    },
    button:{

    },
    btnText:{

    }
})
