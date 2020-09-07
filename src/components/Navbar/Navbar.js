import React, { Component } from 'react';
import './Navbar.css';

class Header extends Component {
    render() {
        return (
            <nav id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={require('../../../src/img/logo.jpg')} alt="logo" />
                            <p>Flickr Images</p>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
