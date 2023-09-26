import user from '../../data/user.json'
import ProfileStats from '../profileStats/ProfileStats'
import ProfileDesk from '../profileDesk/ProfileDesk'

function Profile() {
const {stats, ...userData} = user;
  return (
    <>
    <ProfileDesk {...userData}/>
    <ProfileStats {...stats}/>
    </>
  )
}

export default Profile