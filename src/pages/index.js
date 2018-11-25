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
			<div className={`row row--flex row--space-between portfolio-wrap`}>
				{data.allWordpressPost.edges.map(({ node, i }) => (
					<PortfolioItemContainer
						key={i}
						item={node}
					/>
				))}
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
        }
      }
    }
  }
`
