import React from 'react';

function MiniFooter() {
    return ( 
        <div>
            <footer class="footer">
                <hr></hr>
                <div class="col-md-6 col-lg-4 text-md-right">
                    <p>© {new Date().getFullYear()} Gandalf</p>
                </div>
            </footer>
        </div>
    );
}

export default MiniFooter;