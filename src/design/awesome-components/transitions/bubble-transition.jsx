import React, { useEffect } from "react";

function BubbleTransition(props) {
    return (
        <div class="black">
            <section class="bubble section-transition" >
                {props.children}
            </section>
        </div>
    )
}

export default BubbleTransition;