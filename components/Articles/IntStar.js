function IntStar({number,...props}) {
    return ( 
        <div {...props}>{number}
            <style jsx>
            {`
            *{
                position:relative;
                display:grid;
                place-items:center;
                color:white;
                width:fit-content;
                height:fit-content;
                aspect-ratio:1;
                z-index:0;
            }
            *:after {
               content: '';
               z-index:-1;
               position: absolute;
               inset:0;
               width:100%;
               height:100%;
               background:#14532d;
               clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
             }`}
            </style>
        </div>
     );
}

export default IntStar;