import { useSelector } from "react-redux";

function AnotherClicker() {
    const clicks = useSelector(state=>state.clicks.clicks);
    return ( 
        <>
            <h1>{clicks}</h1>
        </> 
    );
}

export default AnotherClicker;