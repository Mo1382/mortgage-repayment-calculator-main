import Option from "./Option";

export default function Options() {
  return (
    <div className="form-group options">
      <div>
        <label>Mortgage Type</label>
        <Option id="repayment">Repayment</Option>
        <Option id="interest">Interest Only</Option>
      </div>
    </div>
  );
}
