import Input from "./Input";

export default function Inputs() {
  return (
    <>
      <Input id="amount" addOn="£" isFullWidth={true}>
        Mortgage Amount
      </Input>
      <div className="row">
        <Input id="term" addOn="years" isFullWidth={false}>
          Mortgage Term
        </Input>
        <Input id="interest-rate" addOn="%" isFullWidth={false}>
          Interest Rate
        </Input>
      </div>
    </>
  );
}
