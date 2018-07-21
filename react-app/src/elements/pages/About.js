import React, { Component } from 'react';
import Page from '../../elements/pages/Page';
import AboutContainer from '../../elements/containers/About';

class About extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'About';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'React example' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <AboutContainer {...this.props} />
      </Page>
    );
  }
}

export default About;
