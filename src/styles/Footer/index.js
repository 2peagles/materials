import { styled, TextField, Typography } from "@mui/material";
import { Color } from "../theme";


export const FooterTitle = styled(Typography)(()=>({
  textTransform:'uppercase',
  marginBottom:'1em'
}));
export const SubscribeTF = styled(TextField)(()=>({
    '.MuiInputLabel-root' :{
        color:Color.secondary
    },
    'MuiInput-root::before':{
        borderBottom:`1px solid ${Color.secondary}`
    }
}))