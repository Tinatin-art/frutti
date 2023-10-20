import React from 'react';
import Search from '../search/Search';
import { Link } from 'react-router-dom';

const Header = () => {

    return  <header>
                <div className="header__menu">
                    <div className='header_left'>
                        <div className="header__logo">
                            <span>F</span>
                            <h2 className="header__logo-name">Frutti</h2>
                        </div>
                        <Search />
                    </div>
                    <div className="menu">
                        <button>
                            <div>
                                <span className='location-icon'></span>
                                <span>
                                    Home
                                </span>
                            </div>
                        </button>
                        <Link to={"/signin"} className='login-btn'>Login</Link>
                        <button>
                            <span className='cart-icon'></span>
                        </button>
                    </div>
                </div>
            </header>
}

export default Header;
