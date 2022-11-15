import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <div className>
      <ProfileInfo/>
      <div>
        <Posts/>
      </div>

    </div>
  );
};

export default Profile;
