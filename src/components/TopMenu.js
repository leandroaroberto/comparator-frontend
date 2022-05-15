import React from 'react'
import { Link } from "react-router-dom";

const TopMenu = () => {
    return (
        <ul className="nav">
            <li>
              <Link to="/login"><i className="fas fa-user"></i>Login</Link>
            </li>
          </ul>
    )
}

export default TopMenu;