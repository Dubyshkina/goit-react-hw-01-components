import PropTypes from 'prop-types';
import '../FriendListItem/friendListItem.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend__item">
      {isOnline ?(<span className="friend__status"></span>) : (<span className="friend__status_offline"></span>)}
      <img
        className="friend__avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="friend__name">{name}</p>
    </li>
  );
};
 FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
  };
export default FriendListItem;