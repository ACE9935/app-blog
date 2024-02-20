
import LinkButton from "../LinkButton";

function GenreSec({genre}) {
    return ( 
        <div className='flex flex-col gap-[1rem] border-4 border-[#eadfc5] secg text-2xl h-fit w-full max-w-[600px] bg-white p-4 shadow-[7px_7px_0px_5px_black] font-secondary'>
        <h2 className='text-primary text-2xl'>{genre.genre}</h2>
        <p>{genre.content}</p>
        <LinkButton href={"genre/"+genre.genre.replace(/ /g, "-")+"/1"}>Start reading</LinkButton>
       </div>
     );
}

export default GenreSec;