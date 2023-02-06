import React from 'react';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import customInputStyles from './customInputStyles.module.css'

const CustomInput = () => {
    return (
        <div className={customInputStyles.wrapper}>
            <TextField id="outlined-basic" placeholder='Введите название города' variant="outlined"  />
            <Button color='secondary' variant='outlined' size='large'>
                Найти
            </Button>
        </div>
    );
};

export default CustomInput;