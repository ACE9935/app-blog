import Link from "next/link";

function PaginationBar({numPages, genre}) {
    return ( 

        <div className='flex gap-2 items-center justify-center p-1'>
        {Array.from({ length: numPages }, (_, index) => (
        <Link href={genre.replace(/ /g, '-')+"/"+(index+1)}><div className='text-xl hover:shadow-[2px_2px_0px_1px_black] transition hover:scale-[1.1] grid place-items-center font-secondary text-black bg-white border-black border-2 aspect-[1] w-[50px]' key={index + 1}>
                {index + 1}
         </div></Link>
        ))}
        </div>

     );
}

export default PaginationBar;