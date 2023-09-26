const ProfileDesk = ({username, tag, location, avatar}) => {
  return (<>
  <img src={avatar} alt="" />
  <p>{username}</p>
  <p>{tag}</p>
  <p>{location}</p></>
    
  )
}

export default ProfileDesk