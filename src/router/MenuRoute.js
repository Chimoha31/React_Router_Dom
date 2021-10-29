import React from 'react';
import Menu from '../components/Menu';
import MenuMainFoods from '../components/MenuMainFoods';
import MenuDessert from '../components/MenuDessert';

const MenuRoute = [
  {
    path: "/",
    exact: true,
    children: <Menu />
  },
  {
    path: "/MenuMainFoods",
    exact: false,
    children: <MenuMainFoods />
  },
  {
    path: "/MenuDessert",
    exact: false,
    children: <MenuDessert />
  },
];

export default MenuRoute;
