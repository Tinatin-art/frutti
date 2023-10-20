import React from 'react';

const Header = () => {

    return  <header>
                <div className="header__menu">
                    <div>
                        <div className="header__logo">
                            <span>F</span>
                            <h2 className="header__logo-name">Frutti</h2>
                        </div>
                        <div>
                            <input type="text" />
                            <span className='search-icon'></span>
                        </div>

                    </div>
                    <div className="menu">
                        <button>
                            <div>
                                <span className='location-icon'></span>
                                <span>
                                    Bishkek
                                </span>
                            </div>
                        </button>
                        <button className='login-btn'>Login</button>
                        <button>
                            <span className='cart-icon'></span>
                        </button>
                    </div>
                </div>
            </header>
}

export default Header;
