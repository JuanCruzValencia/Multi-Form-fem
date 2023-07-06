import { FormEvent, useState } from "react";
import { BILLS, IStepTwo, PLANS } from "../types/interfaces";

const useFormTwo = () => {
  const [form, setForm] = useState<IStepTwo>();
  const [plan, setPlan] = useState<PLANS>(PLANS.ARCADE);
  const [bill, setBill] = useState<BILLS>(BILLS.YEARLY);
  const [errors, setErrors] = useState<boolean>(false);

  const handleSelect = (plan: PLANS) => {
    setPlan(plan);
  };

  const handleBill = (bill: BILLS) => {
    setBill(bill);
  };

  const handleStepTwoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({
      plan,
      bill,
    });

    if (form === undefined) {
      setErrors(true);
    }
  };

  return { handleSelect, handleStepTwoSubmit, errors, plan, handleBill };
};

export default useFormTwo;
