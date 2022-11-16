import Posts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  let posts = [
    { id: 1, message: "Hi im okay", likeCounts: '12' },
    { id: 1, message: 'How old are you', likeCounts: '13' },
    { id: 1, message: 'i love football', likeCounts: '7' },

  ]
    return (
    <div className>
      <ProfileInfo/>
      <div>
        <Posts posts={posts}/>
      </div>

    </div>
  );
};

export default Profile;
