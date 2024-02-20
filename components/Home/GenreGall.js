import Link from "next/link"

function GenreGall({data}) {
    return ( 
        <>{data.map((o,i)=><div style={{backgroundImage:`url("/${o.title.replace(/:/g, "")}.jpg")`}} key={i} className="panel relative"><Link href={`/posts/${o.title.replace(/ /g, '-')}`} className="absolute inset-0 w-full h-full"></Link></div>)}</>
     );
}

export default GenreGall;