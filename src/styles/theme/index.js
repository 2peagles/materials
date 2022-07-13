import { createTheme } from '@mui/material/styles';
export const Color = {
    // complemtary
primary:'#ea1577',
secondary:'#15EA88',
// tetradic
light:'#E2EA15' ,//yellow
dark:'#1D15EA', //dark blue

white:'#fff',
black:'#000'
}

const theme = createTheme ({
palette: {
    primary: {
        main: Color.primary
    },
    secondary: {
        main: Color.secondary
    },
    components: {
        MuiButtonprops:{
            defaultProps: {
                 disableRipple:true,
                 disableElevation: true
            }
        }
    }
}
});
export default theme;