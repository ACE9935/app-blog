import { Typography } from "@mui/material"
import Image from "next/image";

function AppLogo(props) {
    return ( 
     <img src="/Logo2.png" {...props} style={{zIndex:100}}/>
     );
}

export default AppLogo