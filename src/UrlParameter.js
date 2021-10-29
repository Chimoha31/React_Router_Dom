import React from "react";
import { useParams } from 'react-router-dom';

const UrlParameter = () => {
  const { id } = useParams();

  return (
    <div>
      <p>URL parameterページです</p>
      <p>パラメーターは、{id}である</p>
    </div>
  );
};

export default UrlParameter;
