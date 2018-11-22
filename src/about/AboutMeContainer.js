import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './about.module.scss';

export default class AboutMeContainer extends Component {
    render() {
        return (
            <div className={styles.about}>
                <div className="row">
                    <p className={`${styles.aboutTag} u-spacing-bottom-30`}>The Studio</p>
                    <h3 className={`${styles.aboutHeading} u-spacing-bottom-50`}>
                        I'm  <span className="u-heading-bg"><span>Thomas Klinger,</span></span> freelance <br/>designer & Creative Director.
                    </h3>
                    <div className={`${styles.aboutBlurb} row row--flex`}>
                        <p>PURENINE offers a variety of solutions in design, development & mobile applications. We have worked with brands such as A&E, Audiomack, History,  Lionsgate, NBA, People & PGA Tour.</p>
                        <p>I’ve also partnered with top agencies like @Havenagency, @Loaded, @Metajive, @Omnigon, @Readysetrocket & @T12Y. I’m always available for new freelance projects. Email at <a href="mailto:hello@purenine.com">hello@purenine.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
