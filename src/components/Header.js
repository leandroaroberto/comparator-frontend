import React from 'react'

const Header = ({headerText, headerImage = ""}) => {
    return (
        <header className="header">
        <div className="container">
          <div>
            <h1>
              {headerText}
            </h1>            
          </div>
          {
            headerImage ? <img src={`header/${headerImage}`} alt="" /> : ''
          }          
        </div>        
      </header>
    )
}

export default Header;