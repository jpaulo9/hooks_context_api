import React, {createContext} from "react";

import users from "../data/data";

const UsersContext = createContext({})


export const UsersProvider = props =>{

    return(
        <UsersContext.Provider  value={{
            state:{
                users
            }
        }}>
            {props.children}
        </UsersContext.Provider>


    )
   
}

export default UsersContext