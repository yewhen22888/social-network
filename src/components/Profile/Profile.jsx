import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <div className>
      <ProfileInfo/>
      <div>
        <Posts postname={props.postname}/>
      </div>

    </div>
  );
};

export default Profile;
