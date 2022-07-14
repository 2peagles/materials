import { Box, Button, Grid, List, ListItemText, Stack, Typography  } from "@mui/material";
import { FooterTitle, SubscribeTF } from "../../styles/Footer";
import {Color } from '../../styles/theme';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';

export default function Footer(){
    return(
        <Box 
        sx={{
            background:Color.dark ,
            color:Color.white,
            p: { xs: 4, md:10},
            pt:12,
            pb:12,
            fontSize:{xs:'12px',md:'14px'}
        }}>
            <Grid container spcaing={2} justifyContent='center'>
                <Grid item md={6} lg={4}>
                    <FooterTitle variant='body1'>about us</FooterTitle>
                    <Typography variant='capition2'>
                        Lorem ipsum dolor sit amet. Et temporibus quos et aliquid similique non 
                        voluptate dolore. Ut omnis dolorem qui molestiae ullam qui consectetur 
                        atque et corrupti molestiae ut adipisci quibusdam et velit harum.
                    </Typography>
                    <Box xs={{
                        mt:4,
                        color:Color.primary
                    }}>
                        <FacebookIcon sx={{ mr:1}}/> 
                        <InstagramIcon sx={{ mr: 1 }} />
                        <TwitterIcon /> 
                    </Box>
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <FooterTitle variant='body1'>Information</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    About us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    Oder Tracking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    Privary &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    Terms &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <FooterTitle variant='body1'>my account</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant='caption2'>
                                    WishLIst
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <FooterTitle variant='body1'>newsletter</FooterTitle>
                        <Stack>
                            <SubscribeTF color="primary" label='Email-address' variant="standard"/>
                                <Button 
                                    startIcon={<SendIcon sx={{color:Color.white}}/>}
                                    sx={{mt:4, mb: 4}}
                                    variant='contained' >
                                    Subscribe
                                </Button>
                        </Stack>
                    </Grid>
                </Grid>
        </Box>
    )
}