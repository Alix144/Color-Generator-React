const Box = ({text, color}) => {
    return ( 
        <div className="box" style={{backgroundColor: color}}>
            <h2>{text}</h2>
        </div>
     );
}
 
export default Box;