import ResultDesc from "./ResultDesc";
import ResultPic from "./ResultPic";
import ResultCard from "./ResultCard";

export default function Result() {
  return (
    <div className="right">
      <ResultPic />
      <ResultDesc />
      {/* <ResultCard /> */}
    </div>
  );
}
