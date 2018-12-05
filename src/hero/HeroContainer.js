import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroMask from '../icons/HeroMask';

import styles from './hero.module.scss';
export default class HeroContainer extends Component {
    renderHeroMask() {
        return (
            <div className={styles.hero}>
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

    renderHeroTagline() {
        return (
            <div className="row u-spacing-bottom-150">
                <h2 className={styles.heroTagline}>
                    Visual Design. UX/UI. Art Direction. production. motion. Strategy. Investor. <span className="u-heading-underlined"><span>Freelance.</span></span>
                </h2>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderHeroMask()}
                {this.renderHeroTagline()}
            </div>
        );
    }
}
