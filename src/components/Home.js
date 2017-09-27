import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link key={user.uid} to={`/details/${user.uid}`} className="link">
            <ProfileCard {...user} className="w5 ma3" />
          </Link>
        ))}
      </RobotList>
    </div>
  );
};
