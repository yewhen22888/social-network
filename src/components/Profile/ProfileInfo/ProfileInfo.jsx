import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
      return (
        <div>
            <div className={s.images}>
                <img src='https://static.autox.com/uploads/2021/01/BMW-3-Series-Gran-Limousine-launched-in-India-500x261.jpg  ' />
            </div>
           {/* <div>{props.data}</div> */}
            <div className={s.diskription}>ava + diskription</div>
        </div>
    )
}
export default ProfileInfo