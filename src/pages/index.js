import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../layouts/layout';

import HeroContainer from '../hero/HeroContainer';

export default class IndexPage extends Component {
	render() {
    	return (
      		<Layout>
        		<HeroContainer />
      		</Layout>
    	);
  	}
}
