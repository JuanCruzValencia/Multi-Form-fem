import { FormEvent, useState } from "react";
import { IStepTwo, PLANS, plans } from "../types/interfaces";

type Props = {
  initialValue: IStepTwo;
};

const useFormTwo = ({ initialValue }: Props) => {
  const [form, setForm] = useState<IStepTwo>({ ...initialValue });
  const [plan, setPlan] = useState<PLANS>();
  const [errors, setErrors] = useState<boolean>(false);

  const handleSelect = (plan: PLANS) => {
    setPlan(plan);

    const findPlan = plans.find((p) => p.plan === plan);

    if (findPlan) {
      setForm((prevState) => {
        return { ...prevState, plan };
      });
    }
  };

  const handleStepTwoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form === undefined) {
      setErrors(true);
    }
  };

  return { handleSelect, handleStepTwoSubmit, errors, plan };
};

export default useFormTwo;
