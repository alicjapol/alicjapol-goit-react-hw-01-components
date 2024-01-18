import Profile from './profile/Profile.jsx';
import css from './profile/Profile.module.css';
import Statistics from './statistics/Statistics.jsx';
import data from '../data/data.json';
import user from '../data/user.json';
export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

    </div>
  );
};
