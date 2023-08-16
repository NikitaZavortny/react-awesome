import React from "react";
import { useEffect } from "react";

function CurveTransition(props) {
    return ( 
        <section class="blue section-transition">
            {props.children}
            <div class="curve"></div>
        </section>
    );
}

export default CurveTransition;