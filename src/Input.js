const Input = ({text, handleText}) => {
    return ( 
        <input 
            type="text"
            placeholder={text}
            onChange={handleText}

        />
     );
}
 
export default Input;