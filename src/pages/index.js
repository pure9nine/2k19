import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';

import HeroContainer from '../hero/HeroContainer';
import AboutMeContainer from '../about/AboutMeContainer';

export default class IndexPage extends Component {
	render() {
    	return (
      		<Layout>
        		<HeroContainer />
				<AboutMeContainer />
      		</Layout>
    	);
  	}
}
