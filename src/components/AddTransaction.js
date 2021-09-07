import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState(0)



    const {addTransaction} = useContext(GlobalContext)   //Using addTransaction Action



    const onSubmit = e =>{
        e.preventDefault()

        let newTransaction = {
            text, //taking from textState
            amount:+amount,  //converting string into number or instead use parseInt
        }

        addTransaction(newTransaction)
    }


    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..."  value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br/>
                        (negative - expesnses, postive - income) 
                    </label>
                    <input type="Number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <div>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </>
    )
}
