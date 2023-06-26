type Props = {
  icon: string;
  title: string;
  price: string;
};

const PlanBox: React.FC<Props> = ({ icon, title, price }) => {
  return (
    <>
      <div>
        {icon}
        <h4>{title}</h4>
        <span>${price}/mo</span>
      </div>
    </>
  );
};

export default PlanBox;