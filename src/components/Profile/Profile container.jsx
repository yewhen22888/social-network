import { Axios } from 'axios';
import Profile from './Profile';
import React from 'react';


class ProfileContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(Response => {

        this.props.SetUsersProfile()
      })

  }

  render() {
    return (
      <Profile />
    )
  }
};

export default ProfileContainer;
