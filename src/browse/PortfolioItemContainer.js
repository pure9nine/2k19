import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './portfolio-item.module.scss';

export default class PortfolioItemsContainer extends Component {
	static propTypes = {
		item: PropTypes.object
	};

    render() {
		const { item } = this.props;

		return (
			<div className={styles.item}>
				<div className={styles.itemInner}>
					<a href="#">
						<div className={styles.itemInfo}>
							<p className={`${styles.itemTag} u-spacing-bottom-5`}>{this.props.item.status}</p>
							<h2 className={styles.itemTitle}>{this.props.item.title}</h2>
						</div>
					</a>
				</div>
			</div>
		);
    }
}
