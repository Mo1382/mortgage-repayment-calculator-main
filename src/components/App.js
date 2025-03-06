import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

export default function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [interest, setInterest] = useState("");

  const [resultInfo, setResultInfo] = useState({
    amount: "",
    term: "",
    interest: "",
    isRepaymentSelected: false,
  });

  const [isRepaymentSelected, setIsRepaymentSelected] = useState(false);
  const [isInterestSelected, setIsInterestSelected] = useState(false);

  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const [showAmountError, setShowAmountError] = useState(false);
  const [showTermError, setShowTermError] = useState(false);
  const [showInterestError, setShowInterestError] = useState(false);

  const [showOptionsError, setShowOptionsError] = useState(false);

  function handleChangeAmount(e) {
    setAmount((amount) =>
      Number.isNaN(Number(e.target.value)) ? amount : e.target.value
    );
  }

  function handleChangeTerm(e) {
    setTerm((term) =>
      Number.isNaN(Number(e.target.value)) ? term : e.target.value
    );
  }

  function handleChangeInterest(e) {
    setInterest((interest) =>
      Number.isNaN(Number(e.target.value)) ? interest : e.target.value
    );
  }

  function handleRepaymentSelected() {
    setIsInterestSelected(false);
    setIsRepaymentSelected(true);
  }

  function handleInterestSelected() {
    setIsRepaymentSelected(false);
    setIsInterestSelected(true);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!amount || !term || !interest) {
      if (!amount) setShowAmountError(true);
      if (!term) setShowTermError(true);
      if (!interest) setShowInterestError(true);

      return;
    }

    if (!isRepaymentSelected && !isInterestSelected) {
      setShowOptionsError(true);
      return;
    }

    setResultInfo({ amount, term, interest, isRepaymentSelected });

    setIsFormCompleted(true);

    setShowAmountError(false);
    setShowTermError(false);
    setShowInterestError(false);
  }

  function handleClearInputs(e) {
    e.preventDefault();

    setAmount("");
    setTerm("");
    setInterest("");

    setIsRepaymentSelected(false);
    setIsInterestSelected(false);

    setShowAmountError(false);
    setShowTermError(false);
    setShowInterestError(false);

    setIsFormCompleted(false);
  }

  return (
    <div className="container">
      <Form
        amount={amount}
        term={term}
        interest={interest}
        onChangeAmount={handleChangeAmount}
        onChangeTerm={handleChangeTerm}
        onChangeInterest={handleChangeInterest}
        isRepaymentSelected={isRepaymentSelected}
        isInterestSelected={isInterestSelected}
        onRepaymentSelected={handleRepaymentSelected}
        onInterestSelected={handleInterestSelected}
        showAmountError={showAmountError}
        showTermError={showTermError}
        showInterestError={showInterestError}
        showOptionsError={showOptionsError}
        onSubmit={handleSubmit}
        onClearInputs={handleClearInputs}
      />
      <Result
        isFormCompleted={isFormCompleted}
        resultInfo={resultInfo}
        isRepaymentSelected={isRepaymentSelected}
      />
    </div>
  );
}
