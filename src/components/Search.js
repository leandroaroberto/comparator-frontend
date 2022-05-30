import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Slider from './NonLinearSlider';
import SelectCheckbox from './SelectCheckbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Search() {
  return (
      <div className="container">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Item>
                 <SelectCheckbox
                    label = 'Should be a Slider here'
                    apiUrl= ''
                    selectedValue = ''
                    objIndex='slider'
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <SelectCheckbox
                    label = 'RAM'
                    apiUrl= 'resource/ram'
                    selectedValue = ''
                    objIndex='ram'
                  />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <SelectCheckbox
                    label = 'Hard disk type'
                    apiUrl= 'resource/hdd-type'
                    selectedValue = ''
                    objIndex='hard_disk_type'
                  />
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>
                  <SelectCheckbox
                    label = 'Location'
                    apiUrl= 'resource/location'
                    selectedValue = ''
                    objIndex='location'
                  />
                </Item>
              </Grid>
            </Grid>
          </Box>
      </div>
    );
}
