import { PLANS, plans } from "../../types/interfaces";
import PlanCard from "./PlanCard";

type Props = {
  currentValue: PLANS;
  selectValue: (plan: string) => void;
};

const MultiSelectComponent: React.FC<Props> = ({
  currentValue,
  selectValue,
}) => {
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
