import React from 'react'
import { Link } from "react-router-dom";

function NavButton({route,componentName}) {
  return (
    <Link to={route} className="button">{componentName}</Link>
  )
}

export default NavButton