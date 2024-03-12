const DEPOSIT_AMOUNT = 150;
function Deposit({ isActive, dispatch, balance }) {
  return (
    <div>
      <button
        disabled={isActive}
        onClick={() => dispatch({ type: "deposit", payload: DEPOSIT_AMOUNT })}
      >
        Deposit 150
      </button>
    </div>
  );
}

export default Deposit;
