import './App.css';
import { Header  } from './components/Header';
import {Balance} from './components/Balance'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'
import {GlobalContext, GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Header title="Expense Manager"/>
      <div className="container">
        <Balance/>
      </div>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </GlobalProvider>  
    </div>
  );
}

export default App;
