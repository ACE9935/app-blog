import React from 'react';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material';
import Stext from './SText';

export const StyledDivider = styled(Stext)`
position: relative;
width:fit-content;
/*
&::after {
  content: "";
  position: absolute;
  
  width: 10%;
  top:0;
  bottom:0;
  right:-13%;
  margin:auto;
  height:5px;
  background:white;
}
&::before {
    content: "";
    position: absolute;
    
    width: 10%;
    top:0;
    bottom:0;
    left:-13%;
    margin:auto;
    height:5px;
    background:white;
  }
  */
`;