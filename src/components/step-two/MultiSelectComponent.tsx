import { PLANS } from "../../types/interfaces";
import PlanCard from "./PlanCard";

type Props = {
  currentValue: PLANS;
  selectValue: (plan: PLANS) => void;
};

const MultiSelectComponent: React.FC<Props> = ({
  currentValue,
  selectValue,
}) => {
  //TODO should be a better way of doing this
  const plans = [
    { plan: PLANS.ARCADE, price: 8 },
    { plan: PLANS.ADVANCED, price: 10 },
    { plan: PLANS.PRO, price: 12 },
  ];

  return (
    <>
      {plans.map((plan) => {
        return (
          <PlanCard
            crrentValue={currentValue}
            plan={plan}
            selectPlan={selectValue}
            key={plan.plan}
          />
        );
      })}
    </>
  );
};

export default MultiSelectComponent;
