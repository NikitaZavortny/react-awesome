import React from "react";

import Clicker from "../../state-management/management-components/clicker/Clicker";
import AnotherClicker from "../../state-management/management-components/clicker/Another-clicker";
import Users from "../../state-management/management-components/user/users";

function StateTemplate() {
    return ( 
        <div className="text-white">
            <h1>This is the component, which changes state:</h1>
            <Clicker />
            <h1>This is the component from another place in DOM, but it changes:</h1>
            <AnotherClicker />
            <Users />
        </div> 
    );
}

export default StateTemplate;