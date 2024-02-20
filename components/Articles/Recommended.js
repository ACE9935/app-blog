import { Container,Stack,Divider } from "@mui/material";
import {StyledDivider} from "./StyledDivider"
import IntStar from "./IntStar";
import Link from 'next/link';
import { styled } from '@mui/material';
import React from "react";

const StyledStack = styled(Stack)`
   & img{
      transition: transform 0.3s ease-in-out;;
   }
   :hover{
      & p{
         text-decoration:underline
      }
      & img{
         transform:scale(1.2);
         transition: transform 0.3s ease-in-out;;
      }
   }
  }`

function Recommended({data}) {
    
    return ( 
        <Container className="hidden border-black border-4 lg:block w-fit shrink-0 px-6 pt-6 bg-lightP h-fit">
        <Stack alignItems={"center"}>
        <StyledDivider x={3} y={3} color={"black"} className="absolute translate-y-[-2.2em] text-[1.4rem] font-primary font-[300] text-white" tag="span">Recommended articles</StyledDivider>
         {data.map((o,i)=><React.Fragment key={i+3}>
          <Divider
          sx={{
           borderWidth:"1.6px",
           borderColor:"white"
        }}
        key={i}
        className="w-[100%]"/>
        <Link href={`/posts/${o.title.replace(/ /g, '-')}`}><StyledStack key={i} direction={"row"} alignItems={"start"} spacing={1} className="cursor-pointer py-6 w-[20rem] hover:bg-green-700 transition hover:!text-white">
           <IntStar number={i+1} className="shrink-0 text-[0.8rem] !w-[44px]"/>
           <p className="text-[1.2rem] pr-3">{o.title}</p>
           <img src={`/${o.title.replace(/:/g, "")}.jpg`} className="object-cover w-[80px] aspect-[1] block object-center border-2 border-white shadow-[2px_2px_0px_2px_black]"/>
        </StyledStack></Link>
        </React.Fragment>
         )}
        </Stack>
       </Container>
     );
}

export default Recommended;