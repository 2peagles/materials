import { createTheme } from '@mui/material/styles';
import { lighten } from 'polished';

export const Color = {
    // complemtary
primary:'#ea1577',
secondary:'#15EA88',
// tetradic
light:'#EB62A9' ,//light pink
dark:'#0796AD', //dark blue
white:'#fff',
black:'#000'
}

const theme = createTheme({
palette: {
    primary: {
        main: Color.primary,
    },
    secondary: {
        main: Color.secondary,
    },
    components: {
        MuiButton:{
            defaultProps: {
                 disableRipple:true,
                 disableElevation: true,
            },
        },
    },
        MyShopButton: {
            styleOverrides:{
                root: {
                    color: Color.white,
                },
                primary: {
                    background: `${Color.primary}`,
                    "&:hover": {
                        background: lighten(0.05,Color.primary)
                    },
                },
                dark:{
                    background:`${Color.dark}`,
                    "&:hover":{
                        background:lighten(0.05, Color.dark)
                    },
                },
            },
        },
   },
});
export default theme;