import React,{createContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer'

//Initial State -----> Fetch DB




const initialState = {
    transactions: [  { _id: null, text: null, amount: null },
]
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider component
export const GlobalProvider = ({children}) =>{

    const [state,dispatch] = useReducer(AppReducer,initialState)
    

    //Actions -- setAll items
    function setAllItems(transactions){
        dispatch({
            type:'SET_ALL_TRANSACTIONS',
            payload:transactions
        })


    } 


    //Actions 
    async function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRASACTION',
            payload: id
        })
        await fetch(`/api/deleteitem/${id}`)

    }
    

    //Actions  -- here in parameter complete transaction object
    async function addTransaction(transaction){

        transaction = await fetch(`/api/additem`,{
            method: "POST",
            body: JSON.stringify(transaction),
            headers: {
                "Content-type": "application/json",
                // "x-auth-token": auth.state.token,
            }

            // body:transaction
        })  

        console.log("Item to add")
        console.log(transaction)
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


     return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction,
        setAllItems
    }}>{children}</GlobalContext.Provider>)
}
