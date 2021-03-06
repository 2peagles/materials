import React, {useState} from 'react';
import { clamp } from '../ui/clamp';
import { Box} from '@mui/system';
import { Color } from '../../styles/theme';
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Typography, IconButton } from '@mui/material';
export default function IncDec(){
    const clampV = clamp(1,10);
    const [value, setValue]=useState(1);
    return(
        <Box display='flex' sx={{border:`1px solid ${Color.black}`}}>
        <IconButton sx={{ borderRadius:0 }} onClick={()=> setValue(clampV(value - 1 ) )}>
            <RemoveIcon/>
        </IconButton>
        <Typography variant='h6' sx={{
            p:2
            }}> {value} </Typography>
            <IconButton sx={{ borderRadius: 0 }} onClick={() => setValue(clampV(value + 1))}>
                <AddIcon />
            </IconButton>
        </Box>
    )
}