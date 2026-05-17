/* eslint-disable react-refresh/only-export-components */
import React from 'react';
const counterCreateContext = React.createContext(null); //state box

const CounterProvider = ({ children }) => {
    const [count,setCount] = React.useState(0);
    const [todo,setTodo]=React.useState([]);

    return(
        <counterCreateContext.provider value={{count,todo,setCount,setTodo}}>
            {children}
        </counterCreateContext.provider>
    );
};

export{ CounterProvider,counterCreateContext};