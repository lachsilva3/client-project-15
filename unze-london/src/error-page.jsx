import { useRouteError } from "react-router-dom";

import React from 'react'

export default function ErrorPage() {
    const error= useRouteError();
  return<div className="container">

    <div className="alert">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected Erro has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
    </div>
 
}
