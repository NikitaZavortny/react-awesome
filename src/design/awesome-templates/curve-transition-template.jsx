import React from 'react';
import CurveTransition from '../awesome-components/transitions/curve-transition';
import BubbleTransition from '../awesome-components/transitions/bubble-transition';
import WaveTransition from '../awesome-components/transitions/wave-transition';

import StateTemplate from './state-template';

function CurveTransitionTemplate() {
    return (
        <div class="text-white">

            <CurveTransition backcolor="blue">
                <h1>Curves!!!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CurveTransition>

            <section class="black section-transition">
                <h1>Just Black space!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>

            <BubbleTransition backcolor="red">
                <h1>Bubble!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </BubbleTransition>

            <WaveTransition upcolor="red">
                <h1>Wave!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </WaveTransition>
        </div>
    );
}

export default CurveTransitionTemplate;