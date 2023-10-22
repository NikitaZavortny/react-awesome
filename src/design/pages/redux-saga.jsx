import HomeFooter from "../awesome-components/footers/footer-home";
import BubbleTransition from "../awesome-components/transitions/bubble-transition";
import CurveTransition from "../awesome-components/transitions/curve-transition";
import Home from "../awesome-templates/home-template";
import StateTemplate from "../awesome-templates/state-template";

function ReduxSaga() {
    return (
        <div className="text-white">
            <Home>
                <CurveTransition backcolor="red">
                    <h1>This was realised with redux-saga</h1>
                </CurveTransition>

                <section class="black section-transition">
                    <StateTemplate/>    
                </section>
                <HomeFooter />
            </Home>
        </div>
    );
}

export default ReduxSaga;