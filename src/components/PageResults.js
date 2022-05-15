import React from 'react';
import Box from './Box'

const PageResults = ({computerA = 0, computerB = 0}) => {

    return (
      <section className="boxes">
        <div className="container">
         <Box result={computerA}/>
         <Box result={computerB}/>     
        </div>
      </section>
    )
}

export default PageResults;