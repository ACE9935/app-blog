import { styled } from '@mui/material';
import { InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import ClearIcon from '@mui/icons-material/Clear';
import { AnimatePresence,motion } from 'framer-motion';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "100px",
    backgroundColor: "rgba(0,0,0,0.4)",
    '&:hover': {
        backgroundColor: "rgba(0,0,0,0.8)",
    },

  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    
    zIndex:3,
    height: '100%',
    cursor:"pointer",
    position: 'absolute',
    right:"-2px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));


function SearchBar({onClick,matches,opens}) {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            router.push(`/search/${inputValue.replace(/ /g, '+')}/1`);
        }
      };
    
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };

    return ( 
        <Search>
        <SearchIconWrapper 
        className='cursor-pointer text-white px-2' >
          {inputValue.length?<ClearIcon className='hover:text-green-600 mr-1' onClick={()=>setInputValue("")}/>:(opens&&!matches)?<ClearIcon className='hover:text-green-600 mr-1' onClick={onClick}/>:<></>}
          <SearchIcon className='hover:text-green-600' onClick={()=>opens?inputValue.length&&router.push(`/search/${inputValue.replace(/ /g, '+')}/1`):matches?inputValue.length&&router.push(`/search/${inputValue.replace(/ /g, '+')}/1`):onClick()}/>
        </SearchIconWrapper>
        <AnimatePresence>{(matches||opens)&&<motion.div
        className='w-[16rem]'
        initial={{width:0}}
        animate={{width:"16rem"}}
        exit={{width:0}}
        ><InputBase
        
        sx={{padding:'0.2rem 4rem 0.2rem 0.7rem',fontFamily:"inherit"}}
          className='text-md text-white w-full'
          placeholder="Search…"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          inputProps={{ 'aria-label': 'search' }}
        />
         </motion.div>
        }
        </AnimatePresence>
      </Search>
     );
}

export default SearchBar;