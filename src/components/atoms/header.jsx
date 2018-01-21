import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ type, children }) => {
  switch (type) {
    case 'h1':
      return <h1>{children}</h1>;

    case 'h2':
      return <h2>{children}</h2>;

    case 'h3':
      return <h3>{children}</h3>;

    case 'h4':
      return <h4>{children}</h4>;

    default:
      return <h5>{children}</h5>;
  }
};

Header.defaultProps = {
  type: 'h1',
};

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Header;
