import React, { useContext, useState } from "react";
import {Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import UsersContext from "../context/UsersContext";


export default ({route, navigation}) =>{


    
    const [user, setUser]=useState(route.params? route.params:{})
    const {dispatch} = useContext(UsersContext)

    return(

        <View style={style.form}>

            <Text>Name</Text>
            <TextInput 
            style={style.input}
            onChangeText={nome => setUser({...user, nome})}
            placeholder="Inserir nome"
            value={user.nome}
            />
             <Text>Email</Text>
            <TextInput 
            style={style.input}
            onChangeText={email => setUser({...user, email})}
            placeholder="Inserir e-mail"
            value={user.email}
            />
             <Text>URL Avatar</Text>
            <TextInput 
            style={style.input}
            onChangeText={avatarUrl => setUser({...user, avatarUrl})}
            placeholder="URL Avatar"
            value={user.avatarUrl}
            />
            <Button

                title="Salvar"
                onPress={()=>{
                    
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser' ,
                        payload: user,
                    })
                    navigation.goBack()

                }
                   
                }
            
            />

        </View>
    
    )
}

const style = StyleSheet.create({
    
    form:{
    padding: 12,
    },
    input:{
        height:40,
        borderColor:'gray',
        borderWidth: 1,
        marginBottom:15,
    },


})