import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { addClickAction } from "../../store/clicks-reducer";
 
function Clicker() {
    const dispatch = useDispatch();
    const clicks = useSelector(state => state.clicks.clicks);

    const Click =() =>
    {
        dispatch(addClickAction(1));
    }

    return (
         <div>
            <h1>{clicks}</h1>
            <button className="btn btn-primary" onClick={()=>Click()}>Click</button>
        </div> 
    );
}

export default Clicker;