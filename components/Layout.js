import { Toolbar,Stack,IconButton,InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/system';
import AppLogo from './AppLogo';
import MenuItemStar from './MenuItemStar';
import {genres} from "../src/genresObj"
import Link from 'next/link';
import { useState } from 'react';
import {AnimatePresence, motion} from "framer-motion"
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';

function Layout({children}) {
    const [open,setOpen]=useState(false)
    const [opens,setOpens]=useState(false)
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return ( 
        <>
        <nav className='relative bg-primary lg:py-0 py-2'>
        <div style={{maxWidth:"1400px"}}>
            <div className='flex items-center justify-end !min-h-[0] gap-4'>
               {(matches||!opens)&&<Link href="/"><AppLogo className="cursor-pointer w-[200px]  xl:w-[250px] absolute left-0 top-1"/></Link>}
               <SearchBar opens={opens} onClick={()=>!matches&&setOpens(o=>!o)} matches={matches}/>
                 <Stack component='ul'
                 id="navbar"
                 sx={{
                   display:{xs:'none',lg:'flex'},
                   alignItems:"center"
                 }} direction='row' spacing={0}>
                    
                    {genres.map(i=>
                        <Link key={i+1} href={'/genre/'+i.replace(/ /g, '-')+"/1"}>
                        <MenuItemStar color="white" key={i} className='relative text-xl px-6 py-4 cursor-pointer text-lightP font-secondary h-fit grid place-items-center'>{i.replace(/and/g, '&')}</MenuItemStar>
                        </Link>
                        )}
                 </Stack>
                 <IconButton
                 onClick={()=>setOpen(o=>!o)}
                 sx={{color:'white',alignSelf:'center',display:{
                 lg:'none'
                 }}}><MenuIcon sx={{fontSize:'1.9rem !important'}}></MenuIcon></IconButton>
            </div>
        </div>
        <AnimatePresence>
        {open && <motion.div
        initial={{height:0}}
        animate={{height:"auto"}}
        exit={{height:0}}
        className='items-center mt-2 overflow-hidden lg:hidden flex flex-col w-full bg-lightP border-t-2 border-white'
        >
           {genres.map(i=>
           <>
               <Link className='w-fit' key={i+1} href={'/genre/'+i.replace(/ /g, '-')+"/1"}>
               <MenuItemStar color="black" key={i} className='w-fit relative text-xl px-6 py-4 cursor-pointer font-secondary h-fit grid place-items-center'>{i.replace(/and/g, '&')}</MenuItemStar>
               </Link>
               <motion.div className='w-full h-[1px] bg-white'></motion.div>
               </>
               )}
        </motion.div>
         }
              </AnimatePresence>
       </nav>
       <main>{children}</main>
       <footer></footer>
      </>
     );
}

export default Layout;