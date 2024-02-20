function ATitle({children,...props}) {
    return ( 
        <h1
        style={{
            fontFamily:'Holtwood One SC'
        }}
        {...props}>{children}</h1>
     );
}

export default ATitle;