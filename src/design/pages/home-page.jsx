import HomeFooter from "../awesome-components/footers/footer-home";
import CurveTransitionTemplate from "../awesome-templates/curve-transition-template";
import Home from "../awesome-templates/home-template";

function HomePage() {
    return ( 
        <>
            <Home>
                <CurveTransitionTemplate />
            </Home>
            <HomeFooter />
        </> 
    );
}

export default HomePage;