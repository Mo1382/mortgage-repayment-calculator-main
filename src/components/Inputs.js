import Input from "./Input";

export default function Inputs({
  amount,
  term,
  interest,
  onChangeAmount,
  onChangeTerm,
  onChangeInterest,
  showAmountError,
  showTermError,
  showInterestError,
}) {
  return (
    <>
      <Input
        value={amount}
        onChange={onChangeAmount}
        id="amount"
        addOn="£"
        isFullWidth={true}
        showError={showAmountError}
      >
        Mortgage Amount
      </Input>
      <div className="row">
        <Input
          value={term}
          onChange={onChangeTerm}
          id="term"
          addOn="years"
          isFullWidth={false}
          showError={showTermError}
        >
          Mortgage Term
        </Input>
        <Input
          value={interest}
          onChange={onChangeInterest}
          id="interest-rate"
          addOn="%"
          isFullWidth={false}
          showError={showInterestError}
        >
          Interest Rate
        </Input>
      </div>
    </>
  );
}
