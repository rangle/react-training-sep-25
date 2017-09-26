import React, { Component } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { RobotList } from '../components/RobotList';
import { getUsers, getFilteredUsers } from '../api/users';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';

export class HomeContainer extends Component {
  state = {
    users: [],
    query: '',
  };

  componentDidMount() {
    getUsers().then(users => {
      this.setState(() => ({
        users,
      }));
    });
  }

  updateQuery = e => {
    const value = e.target.value;
    this.setState(() => ({
      query: value,
    }));
  };

  render() {
    const filteredUsers = getFilteredUsers(this.state.query, this.state.users);
    return (
      <div>
        <Header>
          <SearchBar value={this.state.query} onChange={this.updateQuery} />
        </Header>
        <RobotList>
          {filteredUsers.map(user => (
            <ProfileCard key={user.uid} {...user} className="w5 ma3" />
          ))}
        </RobotList>
      </div>
    );
  }
}
