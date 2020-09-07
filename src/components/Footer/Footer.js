import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                Made by&nbsp;<span>Matei Mircea</span>&nbsp;@ {new Date().getFullYear()}
            </footer>
        )
    }
}

export default Footer;
