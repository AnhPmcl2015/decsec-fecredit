import React from 'react'
import './Navigation.scss'
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <figure>
                <img alt='logo' src="http://localhost:3000/images/logo.png"/>
            </figure>

            {/* <section className='nav-custom'>
                <button>
                    <Link to="/page-1">Page 1</Link>
                </button>
            </section> */}

            <section className="nav-custom">
                <button>
                    <Link to="/page-2">Page 2</Link>
                </button>
            </section>

            {/* <section className="nav-custom">
                <button>
                    <Link to="/chatbot">Chatbot</Link>
                </button>
            </section> */}
        </nav>
    )
};

export default Navigation;
