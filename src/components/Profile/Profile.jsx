import PropTypes from 'prop-types';
import './profile.css';
const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
return(
<div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
  <ul className="stats">
    <li className="stats__item">
      <span className="stats__label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className="stats__item">
      <span className="stats__label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className="stats__item">
      <span className="stats__label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
 </div>

);
}

Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;