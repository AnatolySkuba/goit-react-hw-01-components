import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const spanClass = isOnline ? s.statusOnline : s.statusOffline;

  return (
    <>
      <span className={spanClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
