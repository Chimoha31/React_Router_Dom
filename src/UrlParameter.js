import React from "react";
import { useParams, useLocation } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams();
  // console.log(id);
  // useLocationの中には、searchがある。
  const { search } = useLocation();
  // console.log(search);

  const query = new URLSearchParams(search);
  // URLSearchParamesには色々メソッドが入っている。
  console.log(query);

  return (
    <div>
      <p>URL parameterページです</p>
      <p>パラメーターは、{id}である</p>
      <p>Queryメーターは、{query.get("name")}である</p>
    </div>
  );
};

export default UrlParameter;
