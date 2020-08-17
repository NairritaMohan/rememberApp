import  React, {useState} from 'react';
import {View,Text,StyleSheet,TextInput,Picker,TouchableOpacity} from 'react-native' ;

export default class AddScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            
            name : '',
            type : '',
            data : ''
            
        }
    }

    

    onTypeChanged(value){
        this.setState({
            type : value
        })
    }

    rememberData(){
        const name = this.state.name
        const data = this.state.data
        const type = this.state.type
        console.log(`${name} ${data} ${type}`)
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
                onChangeText = {(name)=>{
                    this.setState({
                        name : name
                    })
                }}
value = {this.state.name}
                
                />

<TextInput
                style = {styles.formTextInput}
                placeholder = {'Data'}
                onChangeText = {(data)=>{
                    this.setState({
                        data : data
                    })
                }}
value = {this.state.data}
                
                />
<Picker 
placeholder = {'select type'}
note
mode = 'dropdown'
style = {{width :200}}
selectedValue = {this.state.type} 
onValueChange = {()=>{
    this.onTypeChanged()
}}>
    
               
               <Picker.Item label = "Location" value = "location" />
               <Picker.Item label = "Phone" value = "phone" />
               <Picker.Item label = "website" value = "Website" />
               <Picker.Item label = "Email" value = "email" />
            </Picker>

            


<TouchableOpacity style = {styles.button}
onPress = {()=>{
    this.rememberData()
}}
>
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

 width :100,
 height:20,
 backgroundColor : "blue",
 marginLeft :150   ,
 
    },
    btnText:{
        color : "white",
        fontWeight : 'bold',
        textAlign: 'center',
        alignItems :'center'

    }
})
