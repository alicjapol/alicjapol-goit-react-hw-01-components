import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
      <li key={id} className={css.item}>
                <span className={css.isOnline}>{isOnline ? 'Online' : 'Offline'}</span>

        <img src={avatar} alt={name} className={css.avatar} />
        <p className={css.name}>{name}</p>
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