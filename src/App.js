import { useReducer } from "react";
import Balance from "./components/Balance";
import CloseAccount from "./components/CloseAccount";
import Deposit from "./components/Deposit";
import Header from "./components/Header";
import Loan from "./components/Loan";
import OpenAccount from "./components/OpenAccount";
import PayLoan from "./components/PayLoan";
import RequestLoan from "./components/RequestLoan";
import Withdraw from "./components/Withdraw";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "close":
      return { ...state, isActive: false };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan + 5000,
        balance: state.balance + 5000,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeLoan":
      return { ...initialState };
    default:
      throw new Error("Unknown Action");
  }
}
function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(balance, loan, isActive);

  return (
    <div>
      {/* useReducer Bank Account HEADER */}
      <Header />
      {/* balance: X */}
      <Balance balance={balance} />
      {/* Loan: X */}
      <Loan loan={loan} />
      {/* Open Account BUTTON */}
      <OpenAccount isActive={isActive} dispatch={dispatch} />
      {/* Deposit 150 BUTTON */}
      <Deposit isActive={!isActive} dispatch={dispatch} />
      {/* Withdraw 50 BUTTON */}
      <Withdraw isActive={!isActive} dispatch={dispatch} balance={balance} />
      {/* Request a loan of 5000 BUTTON */}
      <RequestLoan isActive={!isActive} dispatch={dispatch} loan={loan} />
      {/* Pay loan 5000 BUTTON */}
      <PayLoan isActive={!isActive} dispatch={dispatch} />
      {/* Close account BUTTON */}
      <CloseAccount
        isActive={!isActive}
        dispatch={dispatch}
        loan={loan}
        balance={balance}
      />
    </div>
  );
}

export default App;
