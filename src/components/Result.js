import ResultDesc from "./ResultDesc";
import ResultPic from "./ResultPic";
import ResultCard from "./ResultCard";

export default function Result({ isFormCompleted, resultInfo }) {
  return (
    <div className={`right ${isFormCompleted ? "completed" : ""}`}>
      {!isFormCompleted && <ResultPic />}
      <ResultDesc isFormCompleted={isFormCompleted} />
      {isFormCompleted && <ResultCard resultInfo={resultInfo} />}
    </div>
  );
}
