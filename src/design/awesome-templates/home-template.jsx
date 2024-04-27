import React from 'react';
import Navbar from '../awesome-components/navbar-default.jsx';

function Home(props) {
    return ( 
        <div>
            <div className="text-white">
                <Navbar />
                {props.children}
            </div>
        </div>
    );
}

export default Home;