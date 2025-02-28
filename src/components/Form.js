import Button from "./Button";
import Header from "./Header";
import Inputs from "./Inputs";
import Options from "./Options";

export default function Form() {
  return (
    <div className="left">
      <form action="">
        <Header />
        <div className="form-groups">
          <Inputs />
          <Options />
        </div>
        <Button />
      </form>
    </div>
  );
}
