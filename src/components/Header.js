export default function Header({ onClearInputs }) {
  return (
    <div className="header">
      <h1>Mortgage Calculator</h1>
      <button className="reset-btn" onClick={onClearInputs}>
        Clear All
      </button>
    </div>
  );
}
