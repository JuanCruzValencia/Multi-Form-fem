import PaginationContainer from "../pagination/PaginationContainer";
import StepOneContainer from "../step-one/StepOneContainer";
import StepTwoContainer from "../step-two/StepTwoContainer";

const StepsContainer: React.FC = () => {
  return (
    <>
      <StepOneContainer />
      <StepTwoContainer />
      <PaginationContainer />
    </>
  );
};

export default StepsContainer;
