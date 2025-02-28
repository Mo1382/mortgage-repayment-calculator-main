export default function Option({ children, id }) {
  return (
    <div className="option">
      <input type="radio" name="option" id={id} />
      <label for={id}>
        <span className="circle"></span>
        <span className="option-name">{children}</span>
      </label>
    </div>
  );
}
