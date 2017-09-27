import React from 'react';
import { ProfileCard } from './ProfileCard';

export const Details = ({ user }) => {
  return (
    <div className="vh-75 flex items-center justify-center">
      <ProfileCard {...user} />
    </div>
  );
};
