export default (state,action) =>{
    switch(action.type){

        case 'DELETE_TRASACTION':
            return {
                ...state, //Return original state with following modification
                transactions:state.transactions.filter(transaction => transaction.id !==action.payload)  //Here action.payload has transaction id
            }

        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[...state.transactions,action.payload]   // here action.payload has transaction object
            }    
        default:
            return state
    }
}