import React, { Children } from "react";
import USerContext from "./UserContext";

const USerContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return (
        <USerContext.Provider value={{user, setUser}}>
            {children}
        </USerContext.Provider>
    )
}

export default USerContextProvider