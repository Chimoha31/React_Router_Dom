import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return(
    <div>
    <p>Menuのページです</p>
    <Link to="/Menu/MenuMainFoods">Main Menu</Link>
    <br />
    <Link to="/Menu/MenuDessert">Dessert Menu</Link>

    {/* <Switch>
      <Route></Route>
    </Switch> */}
    </div>
  )
}

export default Menu;