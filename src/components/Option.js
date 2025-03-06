export default function Option({ isSelected, onSelected, children, id }) {
  return (
    <div className="option">
      <input checked={isSelected} type="radio" name="option" id={id} />
      <label for={id} onClick={onSelected}>
        <span className="circle"></span>
        <span className="option-name">{children}</span>
      </label>
    </div>
  );
}
