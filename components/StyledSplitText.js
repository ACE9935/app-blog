import SplitText from './SplitText';
import { styled } from '@mui/material';

export const StyledSplitText = styled(SplitText)`

& span span{
 text-shadow: ${({ textshadow }) => textshadow || '7px 7px 0px black'};
 position:relative;
}
`;