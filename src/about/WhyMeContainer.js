import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './why.module.scss';

export default class WhyMeContainer extends Component {
    render() {
        return(
            <div className={`${styles.why} u-padding-y-180`}>
                <div className="row row--flex row--space-between row--align-vertical">
                    <div>
                        <h3 className={styles.whyTitle}>
                            We bring ideas to life through the use of <span className="u-heading-underlined"><span>design and motion</span></span>. 
                        </h3>
                        <p className={`${styles.whyCopy} u-spacing-top-30`}>PURENINE offers a variety of solutions in design, development & mobile applications. We have worked with brands such as A&E, Audiomack, History,  Lionsgate, NBA, People & PGA Tour.</p>
                    </div>
                    <div className={styles.whyImage}>
                        <img src="http://placehold.it/552x368" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
