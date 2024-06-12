import React from "react";

import './present.scss';

const Present = () => {
    return (
        <section className="present">
                <div className="container">
                    <h2 className="about__us">Our best</h2>
                    <div className="present__wrapper">
                        <div className="present__wrap">
                            <div className="present__wrap_img">
                                <img src="assets/beans_1.png" alt=""/>
                            </div>
                            <div className="present__wrap_name">Solimo Coffee Beans 2 kg</div>
                            <div className="present__wrap_price">10.73$</div>
                        </div>
                        <div className="present__wrap">
                            <div className="present__wrap_img">
                                <img src="assets/beans_2.png" alt=""/>
                            </div>
                            <div className="present__wrap_name">Presto Coffee Beans 1 kg</div>
                            <div className="present__wrap_price">15.99$</div>
                        </div>
                        <div className="present__wrap">
                            <div className="present__wrap_img">
                                <img src="assets/beans_3.png" alt=""/>
                            </div>
                            <div className="present__wrap_name">AROMISTICO Coffee 1 kg</div>
                            <div className="present__wrap_price">6.99$</div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Present;