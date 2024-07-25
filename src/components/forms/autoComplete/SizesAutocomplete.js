import React from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import BaseCard from '../../base-card/BaseCard';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "1-9", value: "0" },
  { label: "10-49", value: "1" },
  { label: "50-199", value: "2" },
  { label: "200-999", value: "3" },
  { label: "1000+", value: "4" },
  
];

const SizesAutocomplete = () => (
  <BaseCard title="">
    <Autocomplete
      disablePortal
      id="medium-combo-box-demo-3"
      options={top100Films}
      fullWidth
      sx={{
        mb: 2,
      }}
      renderInput={(params) => (
        <TextField {...params} placeholder="" aria-label="" />
      )}
    />
  </BaseCard>
);

export default SizesAutocomplete;
