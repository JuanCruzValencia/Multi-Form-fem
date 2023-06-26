type Props = {
  title: string;
  subtitle: string;
  price: string;
};

const Checkbox: React.FC<Props> = ({ title, subtitle, price }) => {
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input type="checkbox" checked={true} className="checkbox" />
          <h4>{title}</h4>
          <span className="label-text">{subtitle}</span>
          <span>${price}/mo</span>
        </label>
      </div>
    </>
  );
};

export default Checkbox;
