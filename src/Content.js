import Box from "./Box";
import Input from "./Input";

const Content = ({text, handleText, color}) => {

    return ( 
        <main>
            <Box
               text={text} 
               color={color}
            />
            <Input 
                text={text}
                handleText={handleText}
            />
        </main>
     );
}
 
export default Content;