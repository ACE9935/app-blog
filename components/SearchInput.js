import { useEffect,useRef } from "react";
import { InputBase} from '@mui/material';

function SearchInput({handleChange,handleKeyDown,inputValue,matches}) {

    return ( 
        <InputBase
        autoFocus={!matches}
        
        sx={{padding:'0.3rem 4rem 0.3rem 0.8rem',fontFamily:"inherit"}}
          className='!text-md !text-white !w-full'
          placeholder="Search…"
          onChange={e=>handleChange(e)}
          onKeyDown={handleKeyDown}
          value={inputValue}
          inputProps={{ 'aria-label': 'search' }}
        />
     );
}

export default SearchInput;