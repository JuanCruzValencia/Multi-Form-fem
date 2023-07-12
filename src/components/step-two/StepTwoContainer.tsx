import useFormTwo from "../../hooks/useFormTwo";
import MultiSelectComponent from "./MultiSelectComponent";
import ToggleBtn from "./ToggleBtn";

const StepTwoContainer = () => {
  const { handleSelect, plan, handleStepTwoSubmit } = useFormTwo();
  return (
    <>
      <h2>select your plan</h2>
      <span>You have the option of mothly or yealy billing.</span>
      {/* SELECT BUTTONS */}
      <form className="" onSubmit={handleStepTwoSubmit}>
        <MultiSelectComponent currentValue={plan} selectValue={handleSelect} />
        {/* TOGGLE BUTTON */}
        <ToggleBtn />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default StepTwoContainer;
