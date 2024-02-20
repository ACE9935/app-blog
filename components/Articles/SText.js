function Stext({x,y,tag:Tag,children,color,...props}) {
    return ( 
     <Tag {...props}>{children}
     <style jsx>
    {`
    *{
        text-shadow: ${x}px ${y}px 0px ${color};
      }
    `}
     </style>
     </Tag>
     );
}

export default Stext;