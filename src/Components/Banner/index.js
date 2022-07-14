import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer, BannerContent, BannerTitle, BannerDescription, BannerImage, BannerShopButton} from '../../styles/Banner';
export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
    <BannerContainer>
            <BannerImage src='/Images/pantstwo.jpg' alt='three pairs of colored jeans'></BannerImage>
        <BannerContent>
            <Typography variant="h6">Huge Collection</Typography>
            <BannerTitle variant='h2'> New Pants</BannerTitle>
                <BannerDescription variant='subtitle'> 
                Lorem ipsum dolor sit amet. Sed illum corrupti ea natus modi et porro magnam aut eligendi placeat aut sunt voluptatem ea blanditiis quisquam ut dolores blanditiis. Et commodi nemo ea dolores praesentium quo maiores explicabo
                 ad quae rerum aut facere accusantium et voluptatem commodi.
                 </BannerDescription>
                 <BannerShopButton color='light'> Shop Now </BannerShopButton>
        </BannerContent>
    </BannerContainer>
    );
}