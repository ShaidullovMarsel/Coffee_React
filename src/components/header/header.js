import React from "react";

import './header.scss';
import '../../index.scss';

const Header = () => {
    return (
        <section className="promo">
        <div className="container">
            <header className="header">
                
                <div className="header__logo">
                    <img src="assets/coffee_beans.png" alt="logo"/>
                </div>
                <div className="header__name">
                    <a href="/">Coffee house</a>
                </div>
                <div className="header__our">
                    <a href="/our_coffee">Our coffee</a>
                </div>
                <div className="header__pleasure">
                    For your pleasure
                </div>
            </header>
            <div className="promo__wrapper">
                <h1 className="promo__header">Everything You Love About Coffee</h1>

                <div className="promo__divider">
                    <div className="promo__divider_one"></div>
                    <img src="assets/coffee_beans_main.png" alt=""/>
                    <div className="promo__divider_two"></div>
                </div>

                <h2 className="promo__subheader">We makes every day full of energy and taste</h2>
                <h2 className="promo__subsubheader">Want to try our beans?</h2>
                <button className="promo__button" >More</button>
            </div>
        </div>
    </section>
    )
}

export default Header;