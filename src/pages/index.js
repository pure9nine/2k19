import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts/layout';

import HeroContainer from '../hero/HeroContainer';
import AboutMeContainer from '../about/AboutMeContainer';
import PortfolioItemContainer from '../browse/PortfolioItemContainer';

export default class IndexPage extends Component {
	renderPortfolioItems() {
		const data = this.props.data;

		return (
			<div className="portfolio-wrap">
				<div className="row row--flex row--space-between">
					{data.allWordpressPost.edges.map(({ node, i }) => (
						<PortfolioItemContainer
							key={i}
							item={node}
						/>
					))}
				</div>
				<div className="row u-spacing-top-80 u-spacing-bottom-160 u-text-center">
					<Link to="" className="button">
						<span>Browse projects</span>
					</Link>
				</div>
			</div>
		);
	}

	render() {
    	return (
      		<Layout>
        		<HeroContainer />
					<AboutMeContainer />
					{this.renderPortfolioItems()}
      		</Layout>
    	);
  	}
}

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      	edges {
        	node {
          		title
          		excerpt
				slug
				  status
				  featured_media {
					  source_url
				  }
				  acf {
					  agency
					  external_link
				  }
        	}
      	}
    }
}
`
