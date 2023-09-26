import { FriendsStatus } from "./friendItem.style"


export const FriendsItem = ({avatar, name , isOnline}) => {
  return (
    <li>
      <FriendsStatus isOnline = {isOnline}>
       <img src={avatar} alt={name} width={50}/>
       <p>{name}</p>
      </FriendsStatus>
    </li>
  )
}
