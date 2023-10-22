import React from "react";
import { useEffect } from "react";

function CurveTransition(props) {
    return ( 
        <section class={props.backcolor + " section-transition"}  >
            {props.children}
            <div class={"curve color-" + props.backcolor}></div>
        </section>
    );
}

export default CurveTransition;