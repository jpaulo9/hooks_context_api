import React from "react";
import { Alert, FlatList } from "react-native";
import { View , StyleSheet, Text} from "react-native";
import { Avatar, Button, Icon, ListItem } from "react-native-elements";

import users from "../data/data"


export default props => {

    function confirmUserDeletion (user){

        Alert.alert('Excluir usuário',  'Deseja excluir usuário?', [
            {
                text:'Sim',
                onPress(){
                    console.warn('Excluído')
                }
            },
            {
                text:   'Não'
            }
        ])
    }

    function getActions(user){

        return(

            <>
                  <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                  
                    type="clear" icon={<Icon name="edit" size={25} color="orange" />}
                    buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'light-gray' }}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                    buttonStyle={{ minHeight: '100%', minWidth: '50%', backgroundColor: 'gray' }}
                />

            </>
        )
    }

    function getUserItem ({item: user}) {

     
            return(

            

    
                <ListItem.Swipeable
                key={user.id}
                bottomDivider
                rightContent={getActions(user)}
                rightStyle={style.buttonContainer}
                onPress={() => props.navigation.navigate('UserForm', user)}
                 
                 >
                    
                    <Avatar rounded  source={{uri: user.avatarUrl}}/>
                    
                    

                    <ListItem.Content>
                   <ListItem.Title>{user.nome}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    
                    </ListItem.Content>
                 </ListItem.Swipeable>
    
    
           
               
              
            )   
    
       
            
        

    }
 

        return(
       


            <View>

            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
                
            />

               
         </View>


      
        )
        
    
    
}

const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
})