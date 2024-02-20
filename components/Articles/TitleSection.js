import Stext from "../../components/Articles/SText";
import ATitle from "../../components/Articles/ATitle";

function TitleSection({title,date,sub}) {
    return ( 
        <div>
           <Stext className=" font-[800] pb-2 text-3xl md:text-4xl text-black" tag={"p"} x={1} y={1} color={"white"}>{sub}</Stext>
           <ATitle className="font-[300] text-white text-3xl md:text-5xl pb-4 md:!leading-[54px]">{title}</ATitle>
           <p className="text-slate-300 text-md md:text-2xl ">{date}</p>
           </div>
     );
}

export default TitleSection;