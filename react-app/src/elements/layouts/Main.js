import React from 'react';
import Page from '../../elements/pages/Page';
import Application from '../../elements/containers/Application';
import { title, meta, link } from '../../elements/components/Headers';
import '../../assets/fonts/open-sans.css';
import 'bootstrap/dist/css/bootstrap.css'
import Foot from '../components/Foot';

const Main = props => (
  <Page title={title} meta={meta} link={link}>
    <Application {...props} />
    <Foot />
  </Page>
);

export default Main;