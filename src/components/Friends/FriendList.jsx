import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul>
      {
        friends.map(friend => {
          const { avatar, name, id } = friend;
          return (
            <li class="item" key={id} >
  <span  ></span>
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

// const { avatar, name, isOnline, id } = friend;
// className={isOnline ? css.statusOnline : css.statusOffline}