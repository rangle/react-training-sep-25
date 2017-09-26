import React from 'react';
import PropTypes from 'prop-types';

export const Avatar = ({ uid, ...props }) => (
  <img
    src={`https://robohash.org/${uid}`}
    className="w4 h4 br-100"
    {...props}
  />
);

Avatar.propTypes = {
  uid: PropTypes.number.isRequired,
};
