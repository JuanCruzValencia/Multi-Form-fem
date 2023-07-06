import useFormTwo from "../../hooks/useFormTwo";
import MultiSelectComponent from "./MultiSelectComponent";
import ToggleBtn from "./ToggleBtn";

const StepTwoContainer = () => {
  const { handleSelect, plan } = useFormTwo();
  return (
    <>
      <h2>select your plan</h2>
      <span>You have the option of mothly or yealy billing.</span>
      {/* SELECT BUTTONS */}
      <div className="">
        <MultiSelectComponent currentValue={plan} selectValue={handleSelect} />
      </div>
      {/* TOGGLE BUTTON */}
      <div className="">
        <ToggleBtn />
      </div>
    </>
  );
};

export default StepTwoContainer;
