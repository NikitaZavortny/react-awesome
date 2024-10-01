import FooterBase from "./footers/FooterBase";
import Navbar from "./Navbar"

function Layout(props) {
    return ( 
        <>
            <Navbar />
            
            {props.children}
            <FooterBase />
        </> 
    );
}

export default Layout;