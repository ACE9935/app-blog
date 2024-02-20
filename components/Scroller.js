import StarIcon from '@mui/icons-material/Star';
import React from 'react';

function Scroller() {
    return ( 
        <div className='scroller font-primary bg-black text-white overflow-hidden flex flex-nowrap items-center text-4xl sm:text-6xl py-6 gap-[1rem] px-4'>
        {
          Array.from({ length: 8 }, (_, index) => index + 1).map((o,i)=><React.Fragment key={i + 1}>
          <StarIcon className='text-white' sx={{fontSize:"4rem"}}/>
          <span key={i}>Explore</span>
        <StarIcon key={i+1} className='text-white' sx={{fontSize:"4rem"}}/>
        <span key={i+2}>InkInspireHub</span>
        
          </React.Fragment>)
        }
      </div>
     );
}

export default Scroller;