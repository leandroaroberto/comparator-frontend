import React from 'react'
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <>         
            <div className="container">
                <p>
                    <Link to="/">Go to the home page</Link>
                </p>
                <img src='404.jpg' />
            </div>
        </>
    )
}
export default NoMatch;