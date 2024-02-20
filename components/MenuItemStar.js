function MenuItemStar({color,...props}) {
    return ( 
        <span {...props}>
             {props.children}
            <style jsx>
             {`
             /* Style for the main element */
             span{
               color:${color}
             }
             /* Style for the :after pseudo-element to create a star */
             span:after {
               content: '';
               position: absolute;
               left:0px;
               top:10px;
               transform:rotate(0deg) scale(0);
               width:20px;
               height:20px;
               background:${color};
               clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
               transition: transform 0.5s ease;
             }
             span:hover:after {
                transform:rotate(90deg) scale(1);
              }
             
             `}
            </style>
        </span>
     );
}

export default MenuItemStar;