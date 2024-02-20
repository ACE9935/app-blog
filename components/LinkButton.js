import Link from "next/link";

function LinkButton({children,...props}) {
    return ( 
        <Link {...props} className='p-3 border-primary border-2 text-[1.2rem] text-primary w-fit hover:bg-primary ease-in duration-300 bg-slate-100  hover:drop-shadow-[-4px_4px_0px_rgba(0,0,0,1)] hover:text-white transition'>{children}</Link>
     );
}

export default LinkButton;