export default function ResultDesc({ isFormCompleted }) {
  const formUncompletedResult = (
    <>
      <h3 class="result-title">Results shown here</h3>
      <p class="result-desc">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </>
  );
  const formCompletedResult = (
    <>
      <h3 class="result-title">Your results</h3>
      <p class="result-desc">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
    </>
  );

  return <>{!isFormCompleted ? formUncompletedResult : formCompletedResult}</>;
}
