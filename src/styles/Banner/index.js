import { Button, Box,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme, { Color } from '../theme';
import { lighten } from 'polished';

export const BannerContainer = styled(Box)(()=>({
    display: 'flex',
    justifyContent:'center',
    width: '100%',
    height: ' 100%',
    padding: ' 0px 0px',
    background: Color.secondary,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems:'center'
    }
}));

export const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth: 420,
    padding: '30px',
    [theme.breakpoints.down('sm')]:{
        alignItems:'center'
    }
}))
export const BannerImage=styled('img')(({src, theme})=>({
    src:`url(${src})`,
    width: '490px',
    marginRight:'30px',
    [theme.breakpoints.down('md')]: {
        width:'350px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '320px',
        height: '230px'
    }
}));

export const BannerTitle= styled(Typography)(()=>({
    lineHeight: 1.5,
    fontSize:'72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')] :{
        fontSize:'42px'
    }
}));
export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.25,
    fontSize: '1.25',
    marginBottom: '3rem',
    [theme.breakpoints.down('sm')]: {
        lineHeight: 1.15,
        fontSize: '1.15',
        marginBottom: '1.5rem',
    }
}));
export const BannerShopButton =styled(Button, {
    shouldForwardProp:(prop) => prop !== 'color',
    name:"MyShopButton",
    slot:'Root',
    overRidesResolver:(props,styles) =>[
        styles.root,
        props.Color === 'primary ' && styles.primary,
        // props.Color === 'light' && styles.light,
    ],
    })(({theme}) =>({
        padding: '20px 0px',
        color:Color.white,
        background: Color.primary,
        "&:hover": {
            background: lighten(0.05,Color.primary)},
        fontWeight:'bold',
        fontSize: '16px',
        [theme.breakpoints.down('sm') ] :{
            padding:'10px 20px',
            fontSize:'14px'
        }
}));