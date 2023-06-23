import StepOneForm from "./StepOneForm";

const StepOneContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <h2 className="capitalize">personal info</h2>
      <span>Please provide your name, email adress and phone number.</span>
      <StepOneForm />
    </div>
  );
};

export default StepOneContainer;
