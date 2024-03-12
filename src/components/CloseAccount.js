function CloseAccount({ isActive, dispatch, loan, balance }) {
  const canClose = loan === 0 && balance === 0;
  return (
    <div>
      <button
        disabled={isActive ? isActive : !canClose}
        onClick={() => dispatch({ type: "closeLoan" })}
      >
        Close Account
      </button>
    </div>
  );
}

export default CloseAccount;
