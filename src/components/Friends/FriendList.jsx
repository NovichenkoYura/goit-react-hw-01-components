import PropTypes from "prop-types";
import styles from './FriendList.module.css'

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {
        friends.map(friend => {
          const { avatar, name, isOnline, id } = friend;
          return (
            <li className={styles.item} key={id} >
              <span  className={isOnline ? styles.online : styles.offline}></span>
              <img class="avatar" src={avatar} alt="User avatar" width="48" />
              <p class="name">{ name}</p>
            </li>
          )
        })
      }        

    </ul>
  )    

}

FriendList.propTypes = {
  friends: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
}

