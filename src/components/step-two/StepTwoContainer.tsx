const StepTwoContainer = () => {
  return (
    <>
      <h2>select your plan</h2>
      <span>You have the option of mothly or yealy billing.</span>
      {/* SELECT BUTTONS */}
      <div className=""></div>
      {/* TOGGLE BUTTON */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Remember me</span>
          <input type="checkbox" className="toggle" checked />
        </label>
      </div>
    </>
  );
};

export default StepTwoContainer;
