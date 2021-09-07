import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
   
    const {transactions}= useContext(GlobalContext)
    
    console.log(transactions)

    const {setAllItems} = useContext(GlobalContext)
  // updating components whenever change
    useEffect(async ()=>{
        let items = await fetch('/api/allitems')
        items= await items.json()
        // console.log("fetched from DB"+items)
        // console.log(items)
        setAllItems(items)
    })


    return (
        <>
          <h3>History</h3>
          <ul id="list" className="list">
            {transactions.map(transaction =>(
                 <Transaction key={transaction.id}  transaction={transaction}></Transaction>
            ))} 
           
          </ul>  
        </>
    )
}
