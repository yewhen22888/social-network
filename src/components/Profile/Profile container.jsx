import axios from 'axios';
import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { SetUsersProfile } from '../../Redux/profile-reduser'

class ProfileContainer extends React.Component {
  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        console.log(response.data)
        this.props.SetUsersProfile(response.data)
      })

  }
debugger
  render() {
    return (
      <Profile {...this.props}
      />
    )
  }
};
let mapStateToProps = (state) => {
  return {
    data: state.ProfilePage.data
    
  }
}

export default connect(mapStateToProps, { SetUsersProfile })(ProfileContainer)


