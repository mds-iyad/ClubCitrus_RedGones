import Nav from "../Nav";
import Form from "./index"




export default function PageForm()
{
    return(
        <div>
            <Nav />
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center"}}>
                <Form />
            </div>
        </div>
    );
}