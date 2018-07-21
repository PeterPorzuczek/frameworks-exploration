import React, { Component } from 'react';
import Page from '../../elements/pages/Page';
import TopSelling from '../../elements/containers/TopSelling';

class Home extends Component {
  getMetaData() {
    return {
      title: this.pageTitle(),
      meta: this.pageMeta(),
      link: this.pageLink()
    };
  }

  pageTitle = () => {
    return 'Home';
  };

  pageMeta = () => {
    return [
      { name: 'description', content: 'Home page' }
    ];
  };

  pageLink = () => {
    return [];
  };

  render() {
    return (
      <Page {...this.getMetaData()}>
        <TopSelling />
      </Page>
    );
  }
}

export default Home;
