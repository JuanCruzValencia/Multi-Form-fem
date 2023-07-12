import { PLANS } from "../../types/interfaces";

type Props = {
  crrentValue: PLANS;
  plan: { plan: PLANS; price: number };
  selectPlan: (plan: PLANS) => void;
};

const PlanCard: React.FC<Props> = ({ crrentValue, plan, selectPlan }) => {
  return (
    <>
      <div
        className={crrentValue === plan.plan ? "border-2" : "border-none"}
        onClick={() => selectPlan(plan.plan)}
      >
        <div>ICON</div>
        <div>
          <h4 className="">{plan.plan}</h4>
          <span>${plan.price}/mo</span>
        </div>
      </div>
    </>
  );
};

export default PlanCard;
