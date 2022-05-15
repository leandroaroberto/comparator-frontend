// import React from 'react'
// import Button from '@mui/material/Button'

// const Comparator = () => {
//     return (
//         <div className="container">
//           <div>
//             <h1>
//               Comparator component
//             </h1>            
//           </div>       
//         </div>        
//     )
// }

// export default Comparator;


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Comparator({products, setComputerA, setComputerB}) {
  const [serverA, setServerA] = React.useState('');
  const [serverB, setServerB] = React.useState('');

  const handleChangeServerA = (event) => {
    setServerA(event.target.value);
    setServerB(event.target.value);
    setComputerA(event.target.value)
  };

  const handleChangeServerB = (event) => {
    setServerB(event.target.value);
    setComputerB(event.target.value)
  };

  return (     
    <div className="container">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="server-modela-select-helper-label">Server Models</InputLabel>
        <Select
          labelId="server-modela-select-helper-label"
          id="server-modela-select-helper"
          value={serverA}
          label="Server Models"
          onChange={handleChangeServerA}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {
                products.length > 0 ? products.map(prod => (
                    <MenuItem key={prod.id} value={prod.id}>{prod.model_name}</MenuItem>
                )) : ''
            }
        </Select>
        <FormHelperText>Server A</FormHelperText>
      </FormControl>
      <span> versus </span>
      <FormControl  sx={{ m: 1, width: 300 }}>
        <InputLabel id="server-modelb-select-helper-label">Server Models</InputLabel>
        <Select
          label="Server Models"
          value={serverB}
          onChange={handleChangeServerB}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
                products.length > 0 ? products.map(prod => (
                    <MenuItem key={prod.id} value={prod.id}>{prod.model_name}</MenuItem>
                )) : ''
            }
        </Select>
        <FormHelperText>Server B</FormHelperText>
      </FormControl>
    </div>
  );
}
