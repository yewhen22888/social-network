import Posts from './MyPosts/Posts';
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <img src='https://static.autox.com/uploads/2021/01/BMW-3-Series-Gran-Limousine-launched-in-India-500x261.jpg  ' />
      <div>
        ava + diskription
      </div>
      <div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile;