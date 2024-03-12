const WITHDRAW_AMOUNT = 50;
function Withdraw({ isActive, balance, dispatch }) {
  return (
    <div>
      <button
        disabled={
          isActive ? isActive : WITHDRAW_AMOUNT > balance ? true : false
        }
        onClick={() => dispatch({ type: "withdraw", payload: WITHDRAW_AMOUNT })}
      >
        Withdraw 50
      </button>
    </div>
  );
}

export default Withdraw;
