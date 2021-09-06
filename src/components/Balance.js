import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const {transactions}= useContext(GlobalContext) 

    //storing all amounts in amounts array
    const amounts = transactions.map(transaction=> transaction.amount)
    //Finding sum of all amount
    const total = amounts.reduce((acc,item)=> (acc+=item),0).toFixed(2)


    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}
