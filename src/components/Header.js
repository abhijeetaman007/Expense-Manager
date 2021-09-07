import React,{useEffect,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Header = ({title}) => {

    return (
        <h2>
            {title}
        </h2>
    )
}
