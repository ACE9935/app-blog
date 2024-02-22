import ATitle from "./ATitle";
import Recommended from "./Recommended";
import Image from "next/image";
import React from "react";
import { styled } from '@mui/material';

const StyledSection = styled('div')`
   & img{
    margin-bottom:1.3rem;
   }
  }`


function Article({article,data}) {
    return ( 
        <article className="flex gap-[2rem] justify-center">
        <div className="bg-white p-3 sm:p-5 article-sx">
        <Image alt={article.title+" image"} className="" src={`/${article.title.replace(/:/g, "")}.jpg`} width={200} height={200}/>
            {article.sections.map((o,i)=>
        <React.Fragment key={i}>
        <ATitle key={i+1} className="pt-7 text-md md:text-2xl pb-3 text-green-600 font-[300]">{o.title}</ATitle>
        <StyledSection className="psx" key={i+2} dangerouslySetInnerHTML={{__html: o.content}}/>
        </React.Fragment>
        )}
        </div>
        <Recommended data={data.data}/>
        </article>
     );
}

export default Article;