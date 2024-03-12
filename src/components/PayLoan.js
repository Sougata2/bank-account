function PayLoan({ isActive, dispatch }) {
  return (
    <div>
      <button disabled={isActive} onClick={() => dispatch({ type: "payLoan" })}>
        Pay Loan
      </button>
    </div>
  );
}

export default PayLoan;
