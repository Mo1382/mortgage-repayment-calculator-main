import { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Inputs from "./Inputs";
import Options from "./Options";

export default function Form({
  amount,
  term,
  interest,
  onChangeAmount,
  onChangeTerm,
  onChangeInterest,
  isRepaymentSelected,
  isInterestSelected,
  onRepaymentSelected,
  onInterestSelected,
  showAmountError,
  showTermError,
  showInterestError,
  showOptionsError,
  onSubmit,
  onClearInputs,
}) {
  return (
    <div className="left">
      <form action="">
        <Header onClearInputs={onClearInputs} />
        <div className="form-groups">
          <Inputs
            amount={amount}
            term={term}
            interest={interest}
            onChangeAmount={onChangeAmount}
            onChangeTerm={onChangeTerm}
            onChangeInterest={onChangeInterest}
            showAmountError={showAmountError}
            showTermError={showTermError}
            showInterestError={showInterestError}
          />
          <Options
            isRepaymentSelected={isRepaymentSelected}
            isInterestSelected={isInterestSelected}
            onRepaymentSelected={onRepaymentSelected}
            onInterestSelected={onInterestSelected}
            showOptionsError={showOptionsError}
          />
        </div>
        <Button onSubmit={onSubmit} />
      </form>
    </div>
  );
}
