import React from 'react';
import { ProfileCard } from './ProfileCard';

export const Details = ({ match, users }) => {
  const user = users.find(value => value.uid === +match.params.uid);

  return (
    <div className="vh-75 flex items-center justify-center">
      <ProfileCard {...user} />
    </div>
  );
};
