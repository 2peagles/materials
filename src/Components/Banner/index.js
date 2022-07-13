import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BannerContainer } from '../../styles/Banner';
export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
    <BannerContainer>
        <h1>hi</h1>
    </BannerContainer>
    );
}