import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const Header = ({ type, children }) => ([
  type === 'h1' && <h1 key={uuid()}>{children}</h1>,
  type === 'h2' && <h2 key={uuid()}>{children}</h2>,
  type === 'h3' && <h3 key={uuid()}>{children}</h3>,
  type === 'h4' && <h4 key={uuid()}>{children}</h4>,
  type === 'h5' && <h5 key={uuid()}>{children}</h5>,
]);

Header.defaultProps = {
  type: 'h1',
};

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Header;
