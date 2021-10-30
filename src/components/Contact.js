import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {

  return(
    <>
    <p>Contact</p>
    <Link to="/Contact/999">URLパラメーター</Link>
    <br/>
    <Link to="/Contact/999?name=hogehoge">Query parameter</Link>
    </>
  )
}

export default Contact;