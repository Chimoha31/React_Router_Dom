import { useLocation } from "react-router-dom";

const MenuMainFoods = () => {
  // useLocationの中にstateがある。
  const {state} = useLocation();
  console.log(state);

  return (
    <>
      <p>This is Main Foods Menu</p>
    </>
  );
};

export default MenuMainFoods;
