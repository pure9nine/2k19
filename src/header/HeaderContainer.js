import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Logo from '../icons/Logo';
import Burger from '../components/Burger';

export default class HeaderContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            burgerActive: false
        };
    }
    /////////////////////////
    // EVENT HANDLERS
    /////////////////////////

    handleBurgerClick = (e) => {
        this.setState({
            burgerActive: !this.state.burgerActive
        });
    }

    render() {
        return (
            <header className="header u-padding-50">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div className="header__burger">
                        <Burger
                            onBurgerClick={this.handleBurgerClick}
                            burgerActive={this.state.burgerActive}
                            size={20}
                        />
                    </div>
                </div>
            </header>
        );
    }
}
