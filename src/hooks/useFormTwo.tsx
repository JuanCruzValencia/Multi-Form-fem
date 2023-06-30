import { useState } from "react";
import { IStepTwo } from "../types/interfaces";

type Props = {
  initialValue: IStepTwo;
};

const useFormTwo = ({ initialValue }: Props) => {
  const [form, setForm] = useState<IStepTwo>({ ...initialValue });
  const [errors, setErrors] = useState<boolean>(false);

  const handleSelect = () => {};

  const handleStepTwoSubmit = () => {};

  return { handleSelect, handleStepTwoSubmit, errors };
};

export default useFormTwo;
