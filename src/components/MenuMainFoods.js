import { useLocation, useHistory } from "react-router-dom";

const MenuMainFoods = () => {
  // useLocationの中にstateがある。
  const {state} = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  }

  return (
    <>
      <p>This is Main Foods Menu</p>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};

export default MenuMainFoods;
