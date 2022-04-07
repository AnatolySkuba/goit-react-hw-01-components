import FriendListItem from './FriendListItem'
import PropTypes from "prop-types";
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend =>
        <li className={s.item} key={friend.id}>
        <FriendListItem
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
        </li>
        )}
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};