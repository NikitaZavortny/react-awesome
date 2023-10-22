import React, { useEffect } from "react";

function BubbleTransition(props) {
    return (
        <div class="black">
            <section class={"bubble color-" + props.backcolor +" section-transition"} >
                {props.children}
            </section>
        </div>
    )
}

export default BubbleTransition;