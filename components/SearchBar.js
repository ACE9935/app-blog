import { styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useRouter } from 'next/router';
import ClearIcon from '@mui/icons-material/Clear';
import { AnimatePresence,motion } from 'framer-motion';
import SearchInput from './SearchInput';

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


function SearchBar({onClick,matches,opens,inputValue,setInputValue}) {
    const router = useRouter();

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
        className='!cursor-pointer !text-white !px-2' >
          {inputValue.length?<ClearIcon className='hover:text-red-600 !mr-1' onClick={()=>setInputValue("")&&onClick()}/>:(opens&&!matches)?<ClearIcon className='hover:text-red-600 !mr-1' onClick={setInputValue("")&&onClick()}/>:<></>}
          <SearchIcon className='hover:text-green-600' onClick={()=>opens?inputValue.length&&router.push(`/search/${inputValue.replace(/ /g, '+')}/1`):matches?inputValue.length&&router.push(`/search/${inputValue.replace(/ /g, '+')}/1`):onClick()}/>
        </SearchIconWrapper>
        <AnimatePresence>{(matches||opens||inputValue.length)&&
        <ClickAwayListener onClickAway={()=>!matches&&opens&&!inputValue.length&&onClick()}>
        <motion.div
        className='w-[16rem]'
        initial={{width:0}}
        animate={{width:"16rem"}}
        exit={{width:0}}
        ><SearchInput matches={matches} handleChange={handleChange} inputValue={inputValue} handleKeyDown={handleKeyDown}/>
         </motion.div>
         </ClickAwayListener>
        }
        </AnimatePresence>
      </Search>
     );
}

export default SearchBar;