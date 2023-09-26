import friends from '../../../data/friends.json'
import { FriendsItem } from '../friendsItem/FriendsItem'
// import s from './friendList.module.css'


export const FriendList = () => {
  return (
    <ul>
        {friends.map(({ id, avatar, name, isOnline })  => {
            return <FriendsItem key={id}
            avatar = {avatar}
            name={name}
            isOnline={isOnline}/>
        })
        }
    </ul>
  )
}
