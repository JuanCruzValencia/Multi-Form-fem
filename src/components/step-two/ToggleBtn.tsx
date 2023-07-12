import useFormTwo from "../../hooks/useFormTwo";
import { BILLS } from "../../types/interfaces";

const ToggleBtn = () => {
  const { handleBill } = useFormTwo();

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{BILLS.MONTHLY}</span>
        <input
          type="checkbox"
          className="toggle"
          onChange={(e) => handleBill(e)}
        />
        <span className="label-text">{BILLS.YEARLY}</span>
      </label>
    </div>
  );
};

export default ToggleBtn;
