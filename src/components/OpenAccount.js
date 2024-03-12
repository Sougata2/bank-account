function OpenAccount({ isActive, dispatch }) {
  return (
    <div>
      <button disabled={isActive} onClick={() => dispatch({ type: "open" })}>
        Open Account
      </button>
    </div>
  );
}

export default OpenAccount;
