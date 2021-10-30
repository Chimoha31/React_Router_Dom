import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  const arr = [...Array(50).keys()];
  console.log(arr);
  return(
    <div>
    <p>Menuのページです</p>
    {/* <Link to="/Menu/MenuMainFoods">Main Foods</Link> */}
    {/* ↓ */}
    <Link to={{ pathname: "/Menu/MenuMainFoods", state: arr }}>Main Foods</Link>
    <br />
    <Link to="/Menu/MenuDessert">Dessert Menu</Link>
    </div>
  )
}

export default Menu;