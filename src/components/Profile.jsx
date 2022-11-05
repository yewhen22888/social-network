import s from'./Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <img src='https://cdn3.photoblogstop.com/wp-content/uploads/2012/07/Sierra_HDR_Panorama_DFX8048_2280x819_Q40_wm_mini.jpg' />
      <div>
        ava + diskription
      </div>
      <div>
        My post
      </div>
      <div>
        New post
      </div>
      <div className='posts'>
      <div className={s.item}>
        post 1
      </div>
      <div className={s.item}>
        post 2
      </div>
      </div>
    </div>
  )
}

export default Profile;