import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../../elements/containers/Navigation'

const Application = ({ children }) => {
  return (
    <div className='App'>
        <Navigation />
        { children }
    </div>
  );
};

Application.propTypes = {
  children: PropTypes.object
};

export default Application;
