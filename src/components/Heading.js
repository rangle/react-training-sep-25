import React from 'react';
import PropTypes from 'prop-types';

export const Heading = ({ level = 1, size = 1, ...props }) => {
  const Tag = 'h' + level;
  const styles = `sans-serif dark-gray f${size}`;

  return <Tag className={styles} {...props} />;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
};
