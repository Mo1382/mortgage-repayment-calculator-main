export default function ResultCard({
  resultInfo: { amount, term, interest, isRepaymentSelected },
}) {
  const monthlyInterest = interest / 100 / 12;
  const numberOfPayments = term * 12;

  const formulaNumerator =
    amount * (monthlyInterest * (1 + monthlyInterest) ** numberOfPayments);

  const formulaDenominator = (1 + monthlyInterest) ** numberOfPayments - 1;

  const monthlyRepayment = formulaNumerator / formulaDenominator;

  const totalRepayment = monthlyRepayment * numberOfPayments;

  const totalInterest = totalRepayment - amount;
  const monthlyInterestRepayment = totalInterest / numberOfPayments;

  return (
    <div class="result-card">
      <h4 class="card-title">Your monthly repayments</h4>
      <div class="card-monthly-price">
        £
        {isRepaymentSelected
          ? monthlyRepayment.toFixed(2)
          : monthlyInterestRepayment.toFixed(2)}
      </div>
      <h4 class="card-title">Total you’ll repay over the term</h4>
      <div class="card-total-price">
        £
        {isRepaymentSelected
          ? totalRepayment.toFixed(2)
          : totalInterest.toFixed(2)}
      </div>
    </div>
  );
}
