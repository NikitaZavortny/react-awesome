import React from 'react';
import Navbar from '../awesome-components/navbar-default.jsx';

function Home(props) {
    return ( 
        <div>
            <Navbar/>
                { props.children }
        </div>
    );
}

export default Home;