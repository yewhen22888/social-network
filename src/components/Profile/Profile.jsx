import PostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
       return (
        <div className>
         <ProfileInfo {...props}
/>
         <div>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;
