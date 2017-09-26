import React from 'react';
import { ProfileCard } from './ProfileCard';
import { RobotList } from './RobotList';
import { Heading } from './Heading';
import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { getFilteredUsers } from '../api/users';

export const Home = ({ query, users, onQueryChange }) => {
  const filteredUsers = getFilteredUsers(query, users);
  return (
    <div>
      <Header>
        <Heading className="ttu tracked sans-serif light-red f3 mt0">
          Robodex
        </Heading>
        <SearchBar
          value={query}
          onChange={e => onQueryChange(e.target.value)}
        />
      </Header>
      <RobotList>
        {filteredUsers.map(user => (
          <ProfileCard key={user.uid} {...user} className="w5 ma3" />
        ))}
      </RobotList>
    </div>
  );
};
