function RequestLoan({ isActive, dispatch, loan }) {
  return (
    <div>
      <button
        disabled={isActive ? isActive : loan ? true : false}
        onClick={() => dispatch({ type: "requestLoan" })}
      >
        Request a loan of 5000
      </button>
    </div>
  );
}

export default RequestLoan;
