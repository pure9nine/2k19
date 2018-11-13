import React, { Component } from 'react';
import { Link } from 'gatsby';

import HeroContainer from '../hero/HeroContainer';
import Layout from '../layouts/layout';

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <HeroContainer />
      </Layout>
    );
  }
}
