import HomeFooter from "../awesome-components/footers/footer-home";
import BubbleTransition from "../awesome-components/transitions/bubble-transition";
import CurveTransition from "../awesome-components/transitions/curve-transition";
import Home from "../awesome-templates/home-template";
import LoginForm from "../awesome-templates/login-template";

function LoginFormPage() {
    return (
        <div className="text-white">
            <Home>
                <CurveTransition backcolor="green">
                    <h1>Please log in or register</h1>
                </CurveTransition>

                <section class="black section-transition">
                    <LoginForm/>
                </section>
                <HomeFooter />
            </Home>
        </div>
    );
}

export default LoginFormPage;