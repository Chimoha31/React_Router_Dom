import React from 'react';
import UrlParameter from '../UrlParameter';
import Contact from "../components/Contact";

const ContactRoute = [
  {
    path: "/",
    exact: true,
    children: <Contact />

  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  },
];

export default ContactRoute;

