import React, { Component } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { RobotList } from '../components/RobotList';

export class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [{ uid: 123213, name: 'Alice X', email: 'alice@test.com' }],
      count: 0,
    };

    setTimeout(() => {
      this.setState(state => {
        return {
          users: [
            ...state.users,
            {
              uid: 138349,
              name: 'Bob X',
              email: 'bob@test.com',
            },
          ],
        };
      });
    }, 5000);
  }

  render() {
    return (
      <RobotList>
        {this.state.users.map(user => (
          <ProfileCard key={user.uid} {...user} className="w5 ma3" />
        ))}
      </RobotList>
    );
  }
}
