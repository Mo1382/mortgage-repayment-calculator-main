export default function Input({
  value,
  onChange,
  id,
  children,
  addOn,
  isFullWidth,
  showError,
}) {
  return (
    <div className={`form-group ${isFullWidth ? "" : "half"}`} id={id}>
      <div>
        <label for={id}>{children}</label>
        <input type="text" value={value} onChange={onChange} />
        <span className="input-add-on">{addOn}</span>
      </div>
      {showError && <span class="error-msg">This field is required</span>}
    </div>
  );
}
