import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroMask from '../icons/HeroMask';

import styles from './hero.module.scss';

export default class HeroContainer extends Component {
    render() {
        return (
            <div className={`${styles.hero} u-padding-x-50`}>
                <div className={styles.heroInner}>
                    <div className={styles.heroVideo}>
                        <video autoPlay loop muted>
                            <source src="/video/movie.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <span className={styles.heroMask}>
                        <HeroMask />
                    </span>
                </div>
            </div>
        );
    }
}
