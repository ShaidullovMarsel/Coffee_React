import React from 'react';

import './promotwo.scss';

const Promotwo = () => {

        return (
            <section class="promotwo">
                    <div class="container">
                        <header class="headertwo">
                            <div class="headertwo__logo">
                                <img src="icons/coffee_beans.png" alt="logo"/>
                            </div>
                            <div class="headertwo__name">
                                <a href="index.html">Coffee House</a>
                            </div>
                            <div class="headertwo__our">
                                <a href="our_coffee.html">Our coffee</a>
                            </div>
                            <div class="headertwo__pleasure">
                                <a href="pleasure.html">For your pleasure</a>
                            </div>
                        </header>
                        <div class="promotwo__descr">
                            <h1 class="promotwo__descr">Our coffee</h1>
                        </div>  
                    </div>
                </section>
        );
}

export default Promotwo;