import React from "react";


const MyContext = React.createContext(null)

export const Provider = (props) => {
    return <MyContext.Provider value={props.store}>
        {props.Children}
    </MyContext.Provider>
}

export default MyContext