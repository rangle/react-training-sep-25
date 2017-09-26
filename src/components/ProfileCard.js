import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from './Heading';
import { Text } from './Text';
import { Avatar } from './Avatar';

export const ProfileCard = ({ uid, name, email, className, ...props }) => (
  <article
    className={`pa3 br2 tc bg-near-white grow pointer ${className}`}
    {...props}
  >
    <Avatar uid={uid} />
    <Heading level={2} size={4}>
      {name}
    </Heading>
    <Text>{email}</Text>
  </article>
);

ProfileCard.propTypes = {
  uid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
