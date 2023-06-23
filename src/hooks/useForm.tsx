import { ChangeEvent, FormEvent, useState } from "react";
import { IStepOne } from "../types/interfaces";

type Props = {
  initialValue: IStepOne;
};

const useForm = ({ initialValue }: Props) => {
  const [form, setForm] = useState<IStepOne>({ ...initialValue });
  const [errors, setErrors] = useState<boolean>(false);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.fullName.trim() === "" ||
      form.email.trim() === "" ||
      form.phone.trim() === ""
    ) {
      setErrors(true);
    }

    console.log(form);
  };

  const handleStepOne = () => {
    if (
      form.fullName.trim() === "" ||
      form.email.trim() === "" ||
      form.phone.trim() === ""
    ) {
      setErrors(true);
    }
  };

  return { handleFormChange, handleSubmit, errors, handleStepOne };
};

export default useForm;
