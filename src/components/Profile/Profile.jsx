import Posts from './MyPosts/Posts';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
    <div className={s.content}>
      <div className={s.images}>
        <img src='https://static.autox.com/uploads/2021/01/BMW-3-Series-Gran-Limousine-launched-in-India-500x261.jpg  ' />
      </div>
      <div>ava + diskription</div>
      <div>
        <Posts postname2={props.postname}/>
      </div>

    </div>
  );
};

export default Profile;
