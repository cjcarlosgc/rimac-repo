import { Component } from "react";
import '../assets/styles/components/Header.css'
import { FaPhoneAlt } from 'react-icons/fa';

import logo from '../assets/images/logo.svg';

class Header extends Component {
    render(){
        return (
            <header className="Header">
                <img className="Header__image" src={logo} alt="Logo de Rimac"/>

                <section className="Header__call-us">
                    <div className="Header__call-us-mobile">
                        <FaPhoneAlt className="mr-8 Header__call-us-mobile-icon"/>
                        <a href="tel:014116001" className="link-without-underline">
                            Llámanos
                        </a>
                    </div>
                    <div className="Header__call-us-full">
                        <span className="mr-28">¿Tienes alguna duda?</span>
                        <FaPhoneAlt className="mr-8"/>
                        <span>(01) 411 6001</span>
                    </div>
                </section>
            </header>
        )
    }
}

export default Header;