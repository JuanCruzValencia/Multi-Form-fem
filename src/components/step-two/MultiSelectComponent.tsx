import { PLANS } from "../../types/interfaces";

type Props = {
  currentValue: PLANS;
  selectValue: (plan: PLANS) => void;
};

const MultiSelectComponent: React.FC<Props> = ({
  currentValue,
  selectValue,
}) => {
  const plans = Object.keys(PLANS).map((value) => PLANS[value]);

  return (
    <>
      {plans.map((plan) => {
        return <PlanCard text={plan} />;
      })}
    </>
  );
};

export default MultiSelectComponent;
