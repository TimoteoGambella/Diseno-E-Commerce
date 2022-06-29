import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { editPropProduct } from '../../../firebase/FirebaseDB';

const DashboardSelect = ({reload, setReload, propType, productId, palceholderValue}) => {
    const [prenda, setPrenda] = useState(undefined);

    const handleChange = (e) => {
        setPrenda(e.target.value)
        editPropProduct(productId,propType,prenda).then(res => {
            console.log(productId, propType,prenda)
            setReload(!reload);
        });
    }


    useEffect(() => {
        setPrenda(palceholderValue)
    }, []);

    return (

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Tipo de prenda</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={prenda}
                label="Prenda"
                onChange={handleChange}
                placeholder={palceholderValue}
            >
                <MenuItem value={"Remeras"}>Remera</MenuItem>
                <MenuItem value={"Jeans"}>Jean</MenuItem>
                <MenuItem value={"Camperas"}>Campera</MenuItem>
                <MenuItem value={"Joggins"}>Joggin</MenuItem>
            </Select>
            </FormControl>    

    );
}

export default DashboardSelect;
