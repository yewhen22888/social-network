import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
       return (
    <div className>
      <ProfileInfo/>
      <div>
        <Posts
         ProfilePage={props.ProfilePage}
          addPost={props.addPost}
          postChange={props.postChange}/>
      </div>
    </div>
  );
};

export default Profile;
