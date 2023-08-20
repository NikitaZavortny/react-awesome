import React from "react";

import Clicker from "../management-components/clicker/Clicker";
import AnotherClicker from "../management-components/clicker/Another-clicker";
import Users from "../management-components/user/users";

function StateTemplate() {
    return ( 
        <>
            <h1>This is the component, which changes state:</h1>
            <Clicker />
            <h1>This is the component from another place in DOM, but it changes:</h1>
            <AnotherClicker />
            <Users />
        </> 
    );
}

export default StateTemplate;