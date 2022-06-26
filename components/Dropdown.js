import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const Dropdown = ({setItemType, itemType}) => {

    const handleChange = (event) => {
        setItemType(event.target.value);
      };


    return (
        <FormControl fullWidth>
        <InputLabel id="demo-customized-select-label">Categoria</InputLabel>
        <Select
            id="demo-customized-select-label"   
          value={itemType}
          label="Age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"Todo"}>Todo</MenuItem>
          <MenuItem value={"Jeans"}>Jeans</MenuItem>
          <MenuItem value={"Remeras"}>Remeras</MenuItem>
          <MenuItem value={"Camperas"}>Camperas</MenuItem>
        </Select>
      </FormControl>
    );
}

export default Dropdown;
