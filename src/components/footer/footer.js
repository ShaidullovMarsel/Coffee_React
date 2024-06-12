import React from "react";

import './footer.scss';

const Footer = () => {
    return (
            <section className="footer">
                    <div className="container">
                        <footer className="footer">
                            <div className="footer__wrapper">
                                <div className="footer__logo">
                                    <img src="assets/beans_white_footer.png" alt="logo"/>
                                </div>
                
                                <div className="footer__name">
                                    Coffee house
                                </div>
                
                                <div className="footer__our">
                                    Our coffee
                                </div>
                
                                <div className="footer__pleasure">
                                    For your pleasure
                                </div>
                            </div>
                            
                            <div className="promo__divider promo__divider_mt23">
                                <div className="promo__divider_one  promo__divider_one_black"></div>
                                <img src="assets/coffee_beans_black.png" alt=""/>
                                <div className="promo__divider_two promo__divider_two_black"></div>
                            </div>
                            
                        </footer>
                    </div>
                </section>
    )
}

export default Footer;