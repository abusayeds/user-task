import React, { createContext, useState } from 'react';
export const AuthContext =createContext()
const Context = ({children}) => {
    const [values, setValues] = useState()
    const value = (flid) => {
 
       setValues(flid)
        return value
    }
   const authinfo = {value , values}
    return (
        <div>
            <div>
           <AuthContext.Provider value={authinfo} >
            {children}
            </AuthContext.Provider> 
        </div>
        </div>
    );
};

export default Context;