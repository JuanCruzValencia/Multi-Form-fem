import { ChangeEvent, FormEvent, useState } from "react";
import { BILLS, IStepTwo, PLANS } from "../types/interfaces";

const useFormTwo = () => {
  const [plan, setPlan] = useState<PLANS>(PLANS.ARCADE);
  const [bill, setBill] = useState<BILLS>(BILLS.YEARLY);
  const [form, setForm] = useState<IStepTwo>({
    plan,
    bill,
  });
  const [errors, setErrors] = useState<boolean>(false);

  const handleSelect = (plan: PLANS) => {
    setPlan(plan);
    setForm((prevState) => {
      return {
        ...prevState,
        plan,
      };
    });

    console.log(plan);
    console.log(form);
  };

  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
    const bill = e.target.checked ? BILLS.YEARLY : BILLS.MONTHLY;
    setBill(bill);
    setForm((prevState) => {
      return {
        ...prevState,
        bill,
      };
    });

    console.log(bill);
    console.log(form);
  };

  const handleStepTwoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm({
      plan,
      bill,
    });

    if (form?.plan.trim() === "" || form?.plan.trim() === "") {
      setErrors(true);
    }

    console.log(form);
  };

  return { handleSelect, handleStepTwoSubmit, errors, plan, handleBill, bill };
};

export default useFormTwo;
