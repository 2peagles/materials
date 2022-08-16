import { Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from '@mui/system';
import { Color } from '../theme';

export const CartContainer = styled(Box)(()=>({
    width: '350px',
    backgroundColor: Color.white, 
    // border: 5px solid ${textaccent};
    display: 'block',
    zIndex: 1,
    top:0,
    right: 0,
    height: '100vh',
    position: 'fixed',
}));
export const CartHeading = styled(Typography)(()=>({
    padding: '1rem',
    fontWeight: 'bold',
    // border-bottom: 5px solid ${textaccent};
    color:Color.black, 
    fontSize: '1.25rem',
}))
export const CartFooter=styled(Box)(()=>({
 display: 'flex',
 justifyContent:' space-between',
}))

export const CartEmpty=styled(Button)(()=>({
        alignSelf: 'flex-start',
        backgroundColor:Color.white, 
        border: `2px solid ${Color.primary}`,
        paddingLeft:' 1.25rem',
        padding: '0.5rem 0.75rem',
        margin: '0 1.25rem 1.25rem',
        textTransform: 'uppercase',
        color: Color.primary,
        fontWeight: 'bold',
        fontSize: '0.75rem'
}))
// export const CartCheckout=styled.button`
//         background-color: ${textprimary};
//         border: 1px solid ${textprimary};
//         padding-left: 1.25rem;
//         padding: 0.5rem 0.75rem;
//         margin: 0 1.25rem 1.25rem;
//         text-transform: uppercase;
//         color: black;
//         font-weight: bold;
//         font-size: 0.75rem;
//         width:fit-content;
//         border-radius:5px;
// `
// export const CartNone =styled.p`
//         padding: 1.25rem;
//         color: black;
//         text-align: center;
// `
// export const CartTotal =styled.div`
//         display: flex;
//         padding: 1rem 1.25rem 0;
//         border-top: 2px solid $text-primary;
//         justify-content: space-between;
// `
// export const CartTotalTitle =styled.p`
//     color: $text-primary;
//         font-weight: bold;
// `
// // export const CartTotalPrice= styled.p` 

// // `
// export const CartItemContainer=styled.div`
//  display: flex;
//  padding: 1.25rem;
// `
// export const CartItemImg=styled.img`
//     width: 4rem;
//      height: 4rem;
//      object-fit: cover;
//      border: 2px solid $color-accent;
//      margin-right: 0.75rem;
// `
// export const CartQuantityButton=styled.button`
// border:none;
// padding:.5rem;
// background-color:white;
// `
// export const CartQuantityButtonInner=styled.p`
// padding:1rem;
// margin-top:1rem;
// `
// export const CartItemDetailName=styled.h4`
//    font-size: 0.98rem;
//     // color: ${textprimary};
//     font-weight: bold;
//      margin-bottom: 0.25rem;
// `
// export const CartQuantity=styled.div`
//    display: flex;
//     margin: 0 auto;
//      margin-bottom: 0;
//     font-size: 1rem;
// `

// export const CartItemRemove=styled.button`
//       background-color: white;
//         // border: 2px solid ${textprimary};
//         padding: 0.5rem 0.75rem;
//         font-size: 0.75rem;
//         text-transform: uppercase; 
//         color: $text-primary;
//         font-weight: bold;
//         margin-left: auto;
//         align-self: flex-start;
// `
// export const CartNavContainer=styled.div`
//     position: absolute;
//     top: .5rem;
//     right: 1.25rem;
//     // z-index: 999;
// `
// export const CartNavOpenButton =styled.button`
//     border:none;
//     font-size:2rem;
//     background-color:transparent;
//     &:hover{
//         color:${textaccent}
//     }
// `
// export const CartNavCloseButton =styled.button`
//      background-color: ${textprimary};
//      padding: 0 0.25rem;
//     color: white;
//     top:.5rem;
//     right:.5rem;
//     border-radius: 50%;
//     vertical-align: top;
//     width: 2.25rem;
//     height: 2.25rem;
//     border: none;
//     z-index:1999;
//     position:fixed;
// `

