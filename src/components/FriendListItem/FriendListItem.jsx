import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ friend }) => {
    return (
      <li key={friend.id} className={css.item}>
        <img src={friend.avatar} alt={friend.name} className={css.avatar} />
        <p className={css.name}>{friend.name}</p>
        <p className={css.isOnline}>{friend.isOnline ? 'Online' : 'Offline'}</p>
      </li>
    );
  };
  
  FriendListItem.propTypes = {
    friend: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  };
  
  export default FriendListItem