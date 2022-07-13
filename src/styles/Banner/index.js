import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Color } from '../theme';

export const BannerContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent:'center',
    width: '100%',
    height: ' 100%',
    padding: ' 0px 0px',
    background: Color.secondary,
    // [ theme.breakpoints.down('sm')]: {
    //     flexDirection: 'column',
    //     alignItems:'center'
    // }
}));

export const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth: 420,
    padding: '30px'
}))