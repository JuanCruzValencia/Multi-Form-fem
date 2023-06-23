import Button from "../common/Button";

const PaginationContainer = () => {
  return (
    <>
      <Button
        text="go back"
        styles="capitalize"
        onClick={() => console.log("prev page")}
      />
      <Button
        text="next step"
        styles="capitalize"
        onClick={() => console.log("next page")}
      />
    </>
  );
};

export default PaginationContainer;
