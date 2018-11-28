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
		const { acf, slug, featured_media } = item;

		let agency;
		if (acf.agency) {
			agency = <p className={`${styles.itemTag} u-spacing-bottom-5`}>{acf.agency}</p>;
		}

		let img;
		if (featured_media) {
			img = <img src={featured_media.source_url} className={styles.itemImage} alt="" />;
		}

		const infoOverlay = (
			<div className={styles.itemInfo}>
				{agency}
				<h2 className={styles.itemTitle}>{item.title}</h2>
			</div>
		);

		let link = (
			<Link to={`/project/${slug}`}>
				{img}
				{infoOverlay}
			</Link>
		);
		
		if (acf.external_link) {
			link = (
				<a href={acf.external_link} target="_blank" rel="nofollow noindex">
					{img}
					{infoOverlay}
				</a>
			);
		}

		return (
			<div className={styles.item}>
				<div className={styles.itemInner}>
					{link}
				</div>
			</div>
		);
    }
}
