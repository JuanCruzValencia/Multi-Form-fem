import useForm from "../../hooks/useForm";
import Input from "../common/Input";

const StepOneForm: React.FC = () => {
  const initialValue = {
    fullName: "",
    email: "",
    phone: "",
  };

  const { handleFormChange, errors, handleSubmitStepOne } = useForm({
    initialValue,
  });

  return (
    <>
      <form className="flex flex-col" onSubmit={(e) => handleSubmitStepOne(e)}>
        <Input
          label="Name"
          name="fullName"
          type="text"
          error={errors}
          handleChange={handleFormChange}
          placeholder="e.g. Valencia Juan Cruz"
          styles=""
        />
        <Input
          label="Email Adress"
          name="email"
          type="email"
          error={errors}
          handleChange={handleFormChange}
          placeholder="e.g. valencia@lorem.com"
          styles=""
        />
        <Input
          label="Phone Number"
          name="phone"
          type="text"
          error={errors}
          handleChange={handleFormChange}
          placeholder="e.g. +1 234 567890"
          styles=""
        />
        {/* THIS BUTTON SHOULD BE NEXT STEP */}
        <button type="submit">Submit</button> 
      </form>
    </>
  );
};

export default StepOneForm;
