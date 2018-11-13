import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Burger extends Component {
    static propTypes = {
        onBurgerClick: PropTypes.func,
        burgerActive: PropTypes.bool,
        size: PropTypes.number
    }

    static defaultProps = {
        style: {}
    }

    render() {
        const { size, style, onBurgerClick } = this.props;

        const burgerStyles = {
            ...style
        }

        if (size) {
            burgerStyles.width = `${size}px`;
            burgerStyles.height = `${size}px`;
        }

        const burgerClass = classnames('burger', {
            'burger--active': this.props.burgerActive
        });

        return (
            <div
                className={burgerClass}
                style={burgerStyles}
                onClick={onBurgerClick}
            >
                <span className="burger__filling" />
            </div>
        );
    }
}
