import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
          <div>Post 3</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
