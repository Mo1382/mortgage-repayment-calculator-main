export default function Input({ id, children, addOn, isFullWidth }) {
  return (
    <div className={`form-group ${isFullWidth ? "" : "half"}`} id={id}>
      <div>
        <label for={id}>{children}</label>
        <input type="text" />
        <span className="input-add-on">{addOn}</span>
      </div>
    </div>
  );
}
