import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const Menu = () => {
  const arr = [...Array(50).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickMainFoods = () => {
    history.push("/Menu/MenuMainFoods");
  }

  return(
    <div>
    <p>Menuのページです</p>
    {/* <Link to="/Menu/MenuMainFoods">Main Foods</Link> */}
    {/* ↓ */}
    <Link to={{ pathname: "/Menu/MenuMainFoods", state: arr }}>Main Foods</Link>
    <br />
    <Link to="/Menu/MenuDessert">Dessert Menu</Link>
    <br/>
    <button onClick={onClickMainFoods}>Main Foods</button>
    </div>
  )
}

export default Menu;