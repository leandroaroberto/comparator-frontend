import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Comparator({products, setComputerA, setComputerB, computerA, computerB}) {

  const handleChangeServerA = (event) => {
    setComputerA(event.target.value);
    setComputerB(event.target.value);
  };

  const handleChangeServerB = (event) => {
    setComputerB(event.target.value);
  };

  return (     
    <div className="container">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="server-modela-select-helper-label">Server Models</InputLabel>
        <Select
          labelId="server-modela-select-helper-label"
          id="server-modela-select-helper"
          value={computerA}
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
          value={computerB}
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
