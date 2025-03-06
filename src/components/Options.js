import Option from "./Option";

export default function Options({
  isRepaymentSelected,
  isInterestSelected,
  onRepaymentSelected,
  onInterestSelected,
  showOptionsError,
}) {
  return (
    <div className="form-group options">
      <div>
        <label>Mortgage Type</label>
        <Option
          isSelected={isRepaymentSelected}
          onSelected={onRepaymentSelected}
          id="repayment"
        >
          Repayment
        </Option>
        <Option
          isSelected={isInterestSelected}
          onSelected={onInterestSelected}
          id="interest"
        >
          Interest Only
        </Option>
        {showOptionsError && (
          <span class="error-msg">This field is required</span>
        )}
      </div>
    </div>
  );
}
